import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { asyncSetAuthUser } from "../states/authUser/action";
import { LoginForm } from "../components";

const LoginPage = () => {
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  const onLogin = ({ email, password }) => {
    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
    }
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-semibold text-indigo-500">Login</h1>
      <p className="text-xl font-light text-slate-700">
        Sign in to your account
      </p>
      <LoginForm onLogin={onLogin} />
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
