import { Link } from "react-router-dom";

const ButtonAddThread = () => {
  return (
    <div className="p-2">
      <Link to="/new-thread">
        <button className="px-6 py-3 text-white font-medium bg-indigo-500 rounded-2xl">
          New Thread
        </button>
      </Link>
    </div>
  );
};

export default ButtonAddThread;
