import React from "react";
import LoginForm from "../../components/login/LoginForm";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/5">
        <h1 className="text-7xl font-fontJoti text-center">TalkNest</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
