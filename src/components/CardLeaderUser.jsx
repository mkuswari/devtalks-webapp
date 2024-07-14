import React from "react";

const CardLeaderUser = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-700">1</p>
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="w-10 h-10 rounded-full"
        />
        <p className="font-semibold text-slate-700">John Doe</p>
      </div>
      <p className="text-lg font-semibold text-indigo-500">23</p>
    </div>
  );
};

export default CardLeaderUser;
