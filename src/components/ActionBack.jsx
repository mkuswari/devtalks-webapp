import React from "react";
import { IoChevronBack } from "react-icons/io5";

const ActionBack = ({ navigate }) => {
  return (
    <div
      className="p-2 inline-flex items-center gap-1 cursor-pointer text-slate-800"
      onClick={navigate}
    >
      <IoChevronBack />
      <span className="text-sm font-medium">Back</span>
    </div>
  );
};

export default ActionBack;
