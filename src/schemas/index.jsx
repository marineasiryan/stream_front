import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SignUp_Schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Should contain min 2 characters")
    .max(15, "Should contain max 15 characters")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Should contain min 2 characters")
    .max(15, "Should contain max 15 characters")
    .required("Required"),
  // teamNameNumber: yup
  //   .string()
  //   .min(2, "Should contain min 2 characters")
  //   .max(15, "Should contain max 15 characters"),

  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "Password should contain minimum 8 characters, at least one letter and one number",
    })
    .required("Required"),
});

export const SignIn_Schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "Password should contain minimum 8 characters, at least one letter and one number",
    })
    .required("Required"),
});

export const Reset_Password_Schema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "Password should contain minimum 8 characters, at least one letter and one number",
    })
    .required("Required"),
});

export const AddVideoSchema = yup.object().shape({
  title: yup.string().required("Required"),
  link: yup
    .string()
    // .matches(
    //   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //   "Enter correct url!"
    // )
    .required("Please enter youtube url"),
  topic: yup.string(),
  description: yup.string(),
  playlist: yup.string(),
  top: yup.boolean().oneOf([true, false], "You must write true or false"),
  tags: yup.array().of(yup.string()),
  materials: yup.array().of(yup.string()),
});


export const AddPlaylistSchema = yup.object().shape({
  title: yup.string().required("Required"),
  topic: yup.string(),
  description: yup.string(),

});