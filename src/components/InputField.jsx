import React from "react";

const InputField = ({ type, label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        className="h-12 px-4 border border-slate-200 focus:outline-none rounded-xl focus:border-indigo-500 transition ease-in-out duration-150 text-sm"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
