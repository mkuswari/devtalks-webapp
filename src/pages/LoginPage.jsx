import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncSetAuthUserActionCreator } from "../states/authUser/action";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    dispatch(asyncSetAuthUserActionCreator({ email, password }));
    navigate("/");
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold text-indigo-500">Login</h1>
      <p className="text-xl font-light text-slate-700">
        Sign in to your account
      </p>
      <div className="space-y-4 mt-6">
        <InputField
          type="text"
          label="Email"
          placeholder="Input your email"
          value={email}
          onChange={onEmailChange}
          isError
          errorMessage
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Input your password"
          value={password}
          onChange={onPasswordChange}
        />
        <div className="grid">
          <Button onClick={onLogin}>Login</Button>
        </div>
      </div>
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
