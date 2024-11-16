import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Index";

const RouteLayout = () => {
  return (
    <div className="w-full grid grid-cols-[1fr,10fr] h-screen">
      <nav className="bg-[#5E3493] w-full pt-6 pb-16  flex flex-col items-center justify-between">
        <Navbar />
      </nav>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RouteLayout;
