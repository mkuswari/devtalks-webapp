import { registerUser } from "../../services/users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await registerUser({ name, email, password });
    } catch (error) {
      alert(error.response.message);
    }
    dispatch(hideLoading())
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
