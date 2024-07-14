import React from "react";
import { FaCode } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 grid grid-cols-2">
      <div className="bg-gradient-to-t from-indigo-800 to-indigo-500 h-full flex justify-center items-center">
        <div className="text-white flex flex-col items-center">
          <FaCode className="w-40 h-40" />
          <h1 className="text-3xl font-semibold text-white">Dev.Talks</h1>
          <p className="text-white font-light">Learn and share with expert</p>
        </div>
      </div>
      <div className="p-10 flex justify-center items-center">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
