import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="w-3/4 mx-auto rounded-md shadow-md px-10 py-20">
      <form action="" className="w-full flex flex-col gap-5">
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="name">Name</label>
          <input
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="text"
          />
        </div>
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="email">Email</label>
          <input
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="email"
          />
        </div>
        <div className="font-inter_regular text-lg text-[#484848]">
          <label htmlFor="password">Password</label>
          <input
            className="w-full p-3  mt-3 border border-[#D8D8D8] outline-none rounded-md"
            type="password"
          />
        </div>
        <button className="text-[#FFFFFF] bg-[#313131] w-full py-4 rounded-md">
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="font-inter_regular text-base text-[#000000]">
          Already have an account please{" "}
          <a className="text-[#236DB0]">sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
