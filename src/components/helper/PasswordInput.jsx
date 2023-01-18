import React from "react";

import { useField } from "formik";
import { Input } from "antd";

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Input.Password
        {...field}
        {...props}
        className={`form-input  ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
      />
      <label className="form-input-label" htmlFor={props.name}>
        {label}
      </label>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default PasswordInput;
