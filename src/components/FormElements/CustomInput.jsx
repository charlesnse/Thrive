import React from 'react'
import { useField } from 'formik';

function CustomInput({ label, ...props }) {

  const [field, meta] = useField(props);

  return (

    <div className="">
      <input {...field} {...props}  className="form-control"  />
      {meta.touched && meta.error ? (
        <div className="text-danger fs-sm fw-light mt-1">{meta.error}</div>
      ) : null}
    </div>

  )
}

export default CustomInput