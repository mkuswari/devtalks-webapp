import { loginUser, getOwnProfile } from "../../services/users";
import { removeDataFromLocalStorage, setTokenToLocalStorage } from "../../utils/storage";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSER_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  // console.log(authUser);
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

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const { token } = await loginUser({ email, password });
      setTokenToLocalStorage(token);
      const { user } = await getOwnProfile();
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading())
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    removeDataFromLocalStorage('TOKEN');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
