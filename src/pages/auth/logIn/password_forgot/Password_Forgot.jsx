import React from "react";

import { message } from "antd";

import { useFormik } from "formik";
import { forgotPassword } from "../../../../api/auth/forgotPass";

const Password_Forgot = () => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await forgotPassword({
        email: values.email,
      });

      message.success(res.data.message);
    } catch (err) {
      message.error("Something went wrong", err.response);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
  });

  return (
    <div className="forgot_pass">
      <h2 className=" heading-secondary">Enter Your Email</h2>
      <form onSubmit={formik.handleSubmit} className="forgot_pass-form">
        <div className="form_item">
          <label htmlFor="email" className="label text-primary">
            Email Address
          </label>

          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.email && formik.touched.email
                ? " input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="err_message"> {formik.errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn-primary btn-text-primary"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Password_Forgot;
