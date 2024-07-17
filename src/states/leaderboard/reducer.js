import { ActionType } from "./action";

export default function leaderboardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboars;
    default:
      return leaderboards;
  }
}
