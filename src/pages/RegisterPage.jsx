import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold text-indigo-500">Register</h1>
      <p className="text-xl font-light text-slate-700">Create new account</p>
      <form action="" className="space-y-4 mt-6">
        <InputField
          type="text"
          label="Full name"
          placeholder="Input your full name"
        />
        <InputField type="text" label="Email" placeholder="Input your email" />
        <InputField
          type="password"
          label="Password"
          placeholder="Input your password"
        />
        <InputField
          type="password"
          label="Password Confirmation"
          placeholder="Confirm your password"
        />
        <div className="grid">
          <Button>Register</Button>
        </div>
      </form>
      <p className="text-center mt-2 text-sm text-slate-800">
        Already have account?{" "}
        <Link to="/login" className="text-indigo-500 underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
