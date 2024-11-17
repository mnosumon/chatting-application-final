import * as Yup from "yup";

export const signUpForm = Yup.object({
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Pleas enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Pleas enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Pleas use at least one special charecter "
    )
    .min(6, "Password must be at least 6 characters")
    .required("Pleas enter your password"),
});
