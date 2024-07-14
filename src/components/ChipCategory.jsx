import React from "react";

const ChipCategory = ({ name }) => {
  return (
    <span className="bg-indigo-500 px-2 py-0.5 text-xs rounded-full text-white">
      # {name}
    </span>
  );
};

export default ChipCategory;
