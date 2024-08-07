import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncUnsetAuthUser } from "../states/authUser/action";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { authUser = null } = useSelector((states) => states);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

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
          {authUser ? (
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center">
                <img
                  src={authUser.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="px-3 py-2 text-indigo-500 text-sm border border-indigo-500 rounded-md"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
