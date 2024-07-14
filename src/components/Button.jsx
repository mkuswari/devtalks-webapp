import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-indigo-600 text-white text-sm px-6 py-3 rounded-xl">
      {children}
    </button>
  );
};

export default Button;
