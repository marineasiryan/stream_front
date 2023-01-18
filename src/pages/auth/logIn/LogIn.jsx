import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../../api/auth/login";
import { useFormik } from "formik";
import { SignIn_Schema } from "../../../schemas/index";
import { activateAccount } from "../../../api/auth/signup";
import { activateChangeEmail } from "../../../api/user/User";

const Log_In = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const hash = searchParams.get("hash");
  const email = searchParams.get("email");

  const activateUser = async () => {
    try {
      await activateAccount(hash);
    } catch (err) {
      console.log(err);
    }
  };

  const activateUserOnChangeEmail = async () => {
    try {
      await activateChangeEmail(hash, email);
    } catch (err) {
      console.log(err);
    }
  };

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

        navigate("/");
      }
    } catch (err) {
      if (err && err.response) setError(err.response.data.message);
    }
    actions.resetForm();
  };

  // const googleAuth = () => {
  //   window.open(`${"http://127.0.0.1:3007"}/google/callback`, "_self");
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignIn_Schema,
    onSubmit,
  });

  useEffect(() => {
    hash && !email && activateUser();
    hash &&
      !email &&
      dispatch({
        type: "SET_HASH",
        payload: hash,
      });

    hash && email && activateUserOnChangeEmail();
    hash &&
      email &&
      dispatch({
        type: "SET_HASH",
        payload: hash,
      });
  }, []);

  return (
    <>
      <h2 className="title heading-secondary">Sign In</h2>
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
          {/* <p className=" text-primary">OR</p>
          <button type="submit" className="google_btn" onClick={googleAuth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <use href="#google-icon" />
            </svg>
            <span className="google_btn-text text-primary text-primary-black">
              Continue whit Google
            </span>
          </button> */}
        </div>
        <p className="no_account text-primary">
          No account ? <Link to="/sign_up">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default Log_In;
