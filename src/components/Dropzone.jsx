import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi'
import ProfileImage from '../assets/images/about.png'
import axios from 'axios'
import toast from 'react-hot-toast'

const thumbInner = {
    height: '100px',
    width: '100px',
    objectFit: 'cover'
};


function Dropzone() {

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div key={file.name}>
            <img
                src={file.preview}
                className="rounded-circle img-fluid border border-2 border-white"
                onLoad={() => { URL.revokeObjectURL(file.preview) }}
                alt="profile"
                style={thumbInner}
            />
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    });

    const uploadSubmit = async (e) => {

        e.preventDefault()

        if (files.length <= 0) {
            toast.error('Profile Image Feild is empty')
        } else {

            const formData = new FormData()
            formData.append("image", files[0])

            const response = await axios.post('http://127.0.0.1:8000/api/v1/updateprofileimage/74', formData)

            toast.success(response.data.message)

            setTimeout(() => {
                setFiles([])
            }, 2000);

        }

    }

    return (

        <section className="container text-center m-auto position-relative">

            <form onSubmit={uploadSubmit}>

                <div style={{ cursor: 'pointer' }} {...getRootProps({ className: 'dropzone' })}>
                    <input style={{ outline: 'none' }} className="b-none" {...getInputProps()} />
                    <div className="upload"> <BiCloudUpload /> </div>
                </div>

                {files.length > 0 ? (
                    <div className="mt-n4 mt-lg-n6 mb-lg-0 text-center m-auto">{thumbs} </div>
                ) : (
                    <div className="mt-n4 mt-lg-n6 mb-lg-0 text-center m-auto">
                        <img className="upload_image img-fluid border border-2 border-white" src={ProfileImage} alt="profile" />
                    </div>
                )}

                <div className="text-center m-auto mt-4">
                    <button type='submit' class="btn btn-sm btn-primary rounded-pill">Update Image</button>
                </div>

            </form>

        </section>
    );

}

export default Dropzone
