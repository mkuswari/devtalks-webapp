import { loginUser, getOwnProfile } from "../../services/users";
import { setTokenToLocalStorage } from "../../utils/storage";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSER_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

function asyncSetAuthUserActionCreator({ email, password }) {
  return async (dispatch) => {
    try {
      const data = await loginUser({ email, password });
      setTokenToLocalStorage(data.data.token);
      const authUser = await getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser.data.user));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUserActionCreator,
  asyncUnsetAuthUser,
};
