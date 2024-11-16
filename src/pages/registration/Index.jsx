import React from "react";
import RegistrationForm from "../../components/registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/5">
        <h1 className="text-7xl font-fontJoti text-center">TalkNest</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
