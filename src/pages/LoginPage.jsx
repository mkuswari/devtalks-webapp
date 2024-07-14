import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold text-indigo-500">Login</h1>
      <p className="text-xl font-light text-slate-700">
        Sign in to your account
      </p>
      <form action="" className="space-y-4 mt-6">
        <InputField type="text" label="Email" placeholder="Input your email" />
        <InputField
          type="password"
          label="Password"
          placeholder="Input your password"
        />
        <div className="grid">
          <Button>Login</Button>
        </div>
      </form>
      <p className="text-center mt-2 text-sm text-slate-800">
        Not have account?{" "}
        <Link to="/register" className="text-indigo-500 underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
