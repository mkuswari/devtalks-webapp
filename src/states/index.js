import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authReducer from "./authUser/reducer";
import leaderboardReducer from "./leaderboard/reducer";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";
import isPreloadReducer from "./isPreload/reducer";
import threadDetailReducer from "./threadDetail/reducer";

const store = configureStore({
  reducer: {
    authUser: authReducer,
    leaderboards: leaderboardReducer,
    threads: threadsReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
