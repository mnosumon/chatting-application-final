import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpForm } from "../../formValidation/signUpForm";
import InputWarning from "../utilities/InputWarning";
import { useSelector } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ toast }) => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUpForm,
    onSubmit: () => {
      registrationAuth();
    },
  });

  const registrationAuth = () => {
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((items) => {
        const item = items.user;

        updateProfile(auth.currentUser, {
          displayName: formik.values.name,
        }).then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              toast.success("Registration successfull", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            })
            .then(() => {
              set(ref(db, "users/" + item.uid), {
                name: item.displayName,
                email: item.email,
              });
            });
        });
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          toast.error("This email already used", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  const { errors, touched } = formik;

  return (
    <div className="w-3/4 mx-auto rounded-md shadow-md px-10 py-20">
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="w-full flex flex-col gap-5"
      >
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="text"
          />
          {touched.name && errors.name && (
            <InputWarning content={errors.name} />
          )}
        </div>
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
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="font-inter_regular text-base text-[#000000]">
          Already have an account please{" "}
          <Link to="/login" className="text-[#236DB0]">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
