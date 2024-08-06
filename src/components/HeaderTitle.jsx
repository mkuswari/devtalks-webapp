import React from "react";

const HeaderTitle = ({ title, subTitle }) => {
  return (
    <div className="p-2">
      {title && (
        <h2 className="text-indigo-500 font-semibold text-base">{title}</h2>
      )}
      {subTitle && (
        <p className="text-xl md:text-2xl text-slate-800 font-light">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default HeaderTitle;
