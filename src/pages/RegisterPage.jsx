import React, { useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../states/users/action";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const authUser = useSelector((state) => state.authUser);

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [passwordConfirm, onPasswordConfirmChange] = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  const onRegister = () => {
    if (password !== passwordConfirm) {
      toast.error("Password and password confirm must same");
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/login");
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold text-indigo-500">Register</h1>
      <p className="text-xl font-light text-slate-700">Create new account</p>
      <div className="space-y-4 mt-6">
        <InputField
          type="text"
          label="Full name"
          placeholder="Input your full name"
          value={name}
          onChange={onNameChange}
        />
        <InputField
          type="text"
          label="Email"
          placeholder="Input your email"
          value={email}
          onChange={onEmailChange}
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Input your password"
          value={password}
          onChange={onPasswordChange}
        />
        <InputField
          type="password"
          label="Password Confirmation"
          placeholder="Confirm your password"
          value={passwordConfirm}
          onChange={onPasswordConfirmChange}
        />
        <div className="grid">
          <Button onClick={onRegister}>Register</Button>
        </div>
      </div>
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
