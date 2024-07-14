import React from "react";
import { FiSearch } from "react-icons/fi";

const InputSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search thread..."
        className="px-6 w-full focus:outline-none rounded-lg h-12 border border-slate-200 text-sm text-slate-800 font-medium"
      />
      <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
        <FiSearch />
      </div>
    </div>
  );
};

export default InputSearch;
