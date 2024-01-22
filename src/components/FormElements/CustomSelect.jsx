import React from 'react'
import { useField } from 'formik';

function CustomSelect({ label, ...props }) {

  const [field, meta] = useField(props);

  return (
    <div className="">
      <select {...field} {...props} className="form-control" />
      {meta.touched && meta.error ? (
        <div className="text-danger fs-sm fw-light mt-1">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default CustomSelect