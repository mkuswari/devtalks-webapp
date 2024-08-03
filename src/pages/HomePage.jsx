import React, { useEffect } from "react";
import CardThread from "../components/CardThread";
import InputSearch from "../components/InputSearch";
import ChipCategory from "../components/ChipCategory";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    // authUser: authUser.id,
  }));

  return (
    <div className="container my-4">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="p-2">
          <h2 className="text-indigo-500 font-semibold text-base">Threads</h2>
          <p className="text-xl md:text-2xl text-slate-800 font-light">
            Find or start a new{" "}
            <span className="underline decoration-wavy decoration-indigo-500">
              discussion
            </span>
          </p>
        </div>
        {authUser && (
          <div className="p-2">
            <Link to="/new-thread">
              <button className="px-6 py-3 text-white font-medium bg-indigo-500 rounded-2xl">
                New Thread
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="w-full max-w-5xl mt-8 mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <InputSearch />
          <div className="space-y-4 mt-4">
            {threadList.map((thread) => (
              <CardThread key={thread.id} {...thread} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 flex-shrink-0">
          <h3 className="text-slate-800 font-bold text-xl underline decoration-wavy decoration-indigo-500">
            Categories
          </h3>
          <div className="mt-2">
            <div className="flex flex-wrap gap-2">
              <ChipCategory name="React" />
              <ChipCategory name="VueJS" />
              <ChipCategory name="Redux" />
              <ChipCategory name="JavaScript" />
              <ChipCategory name="TailwindCSS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
