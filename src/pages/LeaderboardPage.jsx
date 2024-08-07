import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdRefresh } from "react-icons/io";
import CardLeaderUser from "../components/CardLeaderUser";
import { asyncReceiveLeaderboardsActionCreator } from "../states/leaderboard/action";

const LeaderboardPage = () => {
  const leaderboards = useSelector((states) => states.leaderboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboardsActionCreator());
  }, [dispatch]);

  return (
    <div className="container my-4">
      <div className="p-2 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl text-slate-800 font-light">
          Leaderboard
        </h2>
        <button
          className="flex items-center gap-1 text-slate-700 text-sm"
          onClick={() => dispatch(asyncReceiveLeaderboardsActionCreator())}
        >
          <IoMdRefresh className="w-5 h-5" />
          Refresh
        </button>
      </div>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-2">
        {leaderboards.map((item, index) => (
          <CardLeaderUser
            key={item.user.id}
            number={index + 1}
            name={item.user.name}
            avatar={item.user.avatar}
            score={item.score}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
