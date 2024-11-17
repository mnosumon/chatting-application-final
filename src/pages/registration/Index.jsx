import React from "react";
import RegistrationForm from "../../components/registration/RegistrationForm";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-2/5">
          <h1 className="text-7xl font-fontJoti text-center">TalkNest</h1>
          <RegistrationForm toast={toast} />
        </div>
      </div>
    </>
  );
};

export default Registration;
