import React from "react";

const InputTextArea = ({ type, label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className="h-20 p-4 border border-slate-200 focus:outline-none rounded-xl focus:border-indigo-500 transition ease-in-out duration-150 text-sm"
      ></textarea>
    </div>
  );
};

export default InputTextArea;
