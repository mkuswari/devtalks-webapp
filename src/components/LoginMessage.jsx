import { Link } from "react-router-dom";

const LoginMessage = () => {
  return (
    <div className="text-center">
      <p className="text-slate-800 text-xl font-light mb-4">
        Please login to comment
      </p>
      <Link
        to={"/login"}
        className="px-3 py-2 rounded-lg bg-indigo-500 text-white text-sm"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginMessage;
