import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../../api/auth/login";

import { useFormik } from "formik";
import { SignIn_Schema } from "../../../schemas/index";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const onSubmit = async (values, actions) => {
    setError(null);

    try {
      const res = await login({
        email: values.email,
        password: values.password,
      });

      if (res.data) {
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: "LOGGED_IN",
          payload: res.data,
        });

        navigate("/admin/dashboard/playlist");
      }
    } catch (err) {
      if (err && err.response) setError(err.response.data.message);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignIn_Schema,
    onSubmit,
  });

  return (
    <>
      <p className="title heading-secondary">Ադմին ջան Log In ))</p>
      <form onSubmit={formik.handleSubmit} className="form-signin">
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
                ? "input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="err_message"> {formik.errors.email}</p>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="password" className="label text-primary">
            Password
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
                ? "input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="err_message"> {formik.errors.password}</p>
          )}
        </div>
        <div className="bottom_input">
          <p className="err_mess">{error ? error : ""}</p>

          <Link to="/password_forgot" className="forgot">
            Forgot Password?
          </Link>
        </div>
        <div className="form-signin-buttons">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="btn-primary btn-text-primary"
          >
            SIGN IN
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminLogin;
