import React from 'react'
import { useField } from 'formik';

function TextArea({ label, ...props }) {

    const [field, meta] = useField(props);

    return (

        <div className="">
            <textarea  {...field} {...props}  className="form-control"></textarea>
            {meta.touched && meta.error ? (
                <div className="text-danger fs-sm fw-light mt-1">{meta.error}</div>
            ) : null}
        </div>

    )
}

export default TextArea