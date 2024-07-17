import React from "react";

const CardLeaderUser = ({ number, name, avatar, score }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 w-full flex justify-between items-center hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-700">{number}</p>
        <img src={avatar} className="w-10 h-10 rounded-full" />
        <p className="font-semibold text-slate-700">{name}</p>
      </div>
      <p className="text-lg font-semibold text-indigo-500">{score}</p>
    </div>
  );
};

export default CardLeaderUser;
