import { seeLeaderboards } from "../../services/leaderboards";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARDS",
};

function receiveLeaderboardsActionCreator(leaderboars) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboars,
    },
  };
}

function asyncReceiveLeaderboardsActionCreator() {
  return async (dispatch) => {
    try {
      const data = await seeLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(data.data.leaderboards));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboardsActionCreator,
};
