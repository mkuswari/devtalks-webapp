import { registerUser } from "../../services/users";

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
  return async () => {
    try {
      await registerUser({ name, email, password });
    } catch (error) {
      alert(error.response.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
