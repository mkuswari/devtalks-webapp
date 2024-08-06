import React from "react";
import PropTypes from "prop-types";

const ChipCategory = ({ name, activeCategory, onClick }) => {
  return (
    <span
      className={`${
        activeCategory
          ? `bg-indigo-500 text-white`
          : `bg-transparent border border-indigo-500 text-indigo-500`
      } px-2 py-0.5 text-xs rounded-full cursor-pointer`}
      onClick={onClick}
    >
      # {name}
    </span>
  );
};

export default ChipCategory;

ChipCategory.propTypes = {
  name: PropTypes.string.isRequired,
  activeCategory: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
