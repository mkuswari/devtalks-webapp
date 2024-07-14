import React from "react";
import { IoMdRefresh } from "react-icons/io";
import CardLeaderUser from "../components/CardLeaderUser";

const LeaderboardPage = () => {
  return (
    <div className="container my-4">
      <div className="p-2 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl text-slate-800 font-light">
          Leaderboard
        </h2>
        <button className="flex items-center gap-1 text-slate-700 text-sm">
          <IoMdRefresh className="w-5 h-5" />
          Refresh
        </button>
      </div>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-2">
        <CardLeaderUser />
        <CardLeaderUser />
        <CardLeaderUser />
      </div>
    </div>
  );
};

export default LeaderboardPage;
