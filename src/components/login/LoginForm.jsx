import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import InputWarning from "../utilities/InputWarning";
import { signInForm } from "../../formValidation/signInForm";
const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const auth = getAuth();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signInForm,
    onSubmit: () => {},
  });

  // signInWithEmailAndPassword(auth, formik, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  const { errors, touched } = formik;

  return (
    <div className="w-3/4 mx-auto rounded-md shadow-md px-10 py-20">
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="w-full flex flex-col gap-5"
      >
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="email"
          />
          {touched.email && errors.email && (
            <InputWarning content={errors.email} />
          )}
        </div>
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="password"
          />
          {touched.password && errors.password && (
            <InputWarning content={errors.password} />
          )}
        </div>
        <button
          type="submit"
          className="text-[#FFFFFF] bg-[#313131] w-full py-4 rounded-md"
        >
          Sign in
        </button>
      </form>
      <div className="my-4">
        <Link className="font-inter_regular text-base text-[#4A4A4A] underline">
          forgot password?
        </Link>
      </div>
      <div className="">
        <p className="font-inter_regular text-base text-[#000000]">
          Already have an account please{" "}
          <Link to="/registration" className="text-[#236DB0]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
