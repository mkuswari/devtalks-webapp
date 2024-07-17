import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authUser/reducer";
import leaderboardReducer from "./leaderboard/reducer";
import threadsReducer from "./leaderboard/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authReducer,
    leaderboards: leaderboardReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;
