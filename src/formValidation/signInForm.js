import * as Yup from "yup";

export const signInForm = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Pleas enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Pleas enter your login password"),
});
