import React, { useState } from "react";
import { message } from "antd";
import { signup } from "../../api/auth/signup";
import { useFormik } from "formik";
import { SignUp_Schema } from "../../schemas/index";
import { useSelector } from "react-redux";

const SignUpForm = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  const onSubmit = async (values, actions) => {
    try {
      const res = await signup({
        firstName: values.firstName,
        lastName: values.lastName,
        // teamNameNumber: values.teamNameNumber,
        email: values.email,
        password: values.password,
      },  auth.token);

      message.success(res.data.message);
    } catch (err) {
      message.error(err.message);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      // teamNameNumber: "",
      email: "",
      password: "",
    },
    validationSchema: SignUp_Schema,
    onSubmit,
  });

  return (
    <>
      <h2 className="title heading-secondary lines">CREATE NEW ACCOUNT</h2>
      <form onSubmit={formik.handleSubmit} className="form-signup">
        <div className="user_names">
          <div className="form_item">
            <label htmlFor="firstName" className="label text-primary ">
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.firstName && formik.touched.firstName
                  ? "input input-min input_error"
                  : "input input-min"
              }`}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="err_message"> {formik.errors.firstName}</p>
            )}
          </div>
          <div className="form_item">
            <label htmlFor="lastName" className="label text-primary ">
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.lastName && formik.touched.lastName
                  ? "input input-min input_error"
                  : "input input-min"
              }`}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="err_message"> {formik.errors.lastName}</p>
            )}
          </div>
        </div>
        {/* <div className="form_item">
          <label htmlFor="teamNameNumber" className="label text-primary ">
            Team Name / Number
          </label>

          <input
            type="text"
            id="teamNameNumber"
            placeholder="teamNameNumber"
            value={formik.values.teamNameNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.teamNameNumber && formik.touched.teamNameNumber
                ? "input input-max input_error"
                : "input input-max"
            }`}
          />
          {formik.errors.teamNameNumber && formik.touched.teamNameNumber && (
            <p className="err_message">{formik.errors.teamNameNumber}</p>
          )}
        </div> */}
        <div className="form_item">
          <label htmlFor="email" className="label text-primary ">
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
              formik.errors.email && formik.touched.email ? "input input-max input_error" : "input input-max"
            }`}
          />

          {formik.errors.email && formik.touched.email && (
            <p className="err_message"> {formik.errors.email}</p>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="password" className="label text-primary ">
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

        {/* <div className="input_check">
          <input id="checkbox" className="checkbox_custom" name="checkbox" type="checkbox" />
          <label htmlFor="checkbox" className="checkbox_custom_label text-primary">
            I agree to the Terms of Service and Privacy Policy.
          </label>
        </div> */}
        <button type="submit" className="btn-primary btn-text-primary">
          SAVE
        </button>
        {/* <p className=" text-primary">OR</p> */}
      </form>
    </>
  );
};

export default SignUpForm;
