import React from "react";

const CardUserInfo = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-5 flex justify-center">
      <div className="text-center">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="w-16 h-16 rounded-full mx-auto mb-3"
        />
        <h2 className="text-sm font-semibold text-slate-800">
          Muhammad Kuswari
        </h2>
        <p className="text-xs font-medium text-slate-500">@kusganteng</p>
      </div>
    </div>
  );
};

export default CardUserInfo;
