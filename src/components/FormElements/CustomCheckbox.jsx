import React from 'react'
import { useField } from 'formik';
import { Link } from 'react-router-dom'

function CustomCheckbox({ label, ...props }) {

    const [field, meta] = useField(props);

    return (

        <div className="">
            <input {...field} {...props} className={meta.touched && meta.error ? "form-check-input invalid_checkbox" : 'form-check-input'} />

            <label class="form-check-label mb-1" htmlFor="check">
                I have read and agree with the
                <span> <Link to="/"> Terms & Conditions</Link> </span>
            </label>

            {meta.touched && meta.error ? (
                <div className="text-danger fs-sm fw-light mt-0">{meta.error}</div>
            ) : null}
        </div>

    )
}

export default CustomCheckbox