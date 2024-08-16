import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { asyncRegisterUser } from "../states/users/action";
import { RegisterForm } from "../components";

const RegisterPage = () => {
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  const onRegister = ({ name, email, password, passwordConfirm }) => {
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
      <RegisterForm onRegister={onRegister} />
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
