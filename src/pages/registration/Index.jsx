import React from "react";
import RegistrationForm from "../../components/registration/RegistrationForm";

const Registration = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-3/5 rounded-md shadow-md">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
