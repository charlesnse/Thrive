import React, { useState } from 'react'
import { IoMdEyeOff, IoMdEye } from 'react-icons/io'
import { useField } from 'formik';

function CustomPassword(props) {

    const [field, meta] = useField(props);

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (

        <div className="">

            <div class="input-group">
                <input type={!show ? 'password' : 'text'} class="form-control form-control-lg"   {...field} {...props} />
                <span class="input-group-text">
                    {!show ? <IoMdEyeOff className="visiblePassword" onClick={handleClick} /> : <IoMdEye className="visiblePassword" onClick={handleClick} />}
                </span>
            </div>

            {meta.touched && meta.error ? (
                <div className="text-danger fs-sm fw-light mt-1">{meta.error}</div>
            ) : null}

        </div>

    )
}

export default CustomPassword