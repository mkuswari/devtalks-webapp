import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const authUser = useSelector((state) => state.authUser);

  console.log(authUser);

  return (
    <header className="h-20 flex items-center bg-white border-b border-slate-200">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-slate-800 font-semibold text-xl">
            Dev.<span className="text-indigo-500">Talks</span>
          </h1>
        </Link>
        <nav className="flex flex-row gap-6 items-center">
          <Link to="/" className="text-sm text-slate-800 hover:text-indigo-500">
            Thread
          </Link>
          <Link
            to="/leaderboard"
            className="text-sm text-slate-800 hover:text-indigo-500"
          >
            Leaderboards
          </Link>
          <button className="px-3 py-2 text-indigo-500 text-sm border border-indigo-500 rounded-md">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
