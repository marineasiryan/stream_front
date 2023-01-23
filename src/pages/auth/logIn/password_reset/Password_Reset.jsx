import React from "react";
import { useSearchParams } from "react-router-dom";
import { message } from "antd";

import { Reset_Password_Schema } from "../../../../schemas/index";
import { reset_password } from "../../../../api/auth/forgotPass";

import { useFormik } from "formik";

const Password_Reset = () => {
  const [searchParams] = useSearchParams();
  const hash = searchParams.get("hash");
  const onSubmit = async (values, actions) => {
    try {
      const res = await reset_password(
        { newPass: values.password, confirmPass: values.confirm_password },
        hash
      );

      message.success(res.data.message);
    } catch (err) {
      message.error("Something went wrong", err.response);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: Reset_Password_Schema,
    onSubmit,
  });

  return (
    <div className="reset_pass">
      <p className="heading-secondary">Reset Password</p>
      <form onSubmit={formik.handleSubmit} className="reset_pass-form">
        <div className="form_item">
          <label htmlFor="password" className="label text-primary">
            New Password
          </label>

          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.password && formik.touched.password
                ? " input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="err_message"> {formik.errors.password}</p>
          )}
        </div>

        <div className="form_item">
          <label htmlFor="confirm_password" className="label text-primary">
            Confirm Password
          </label>

          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.confirm_password && formik.touched.confirm_password
                ? " input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p className="err_message">{formik.errors.confirm_password}</p>
            )}
        </div>
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn-primary btn-text-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Password_Reset;
