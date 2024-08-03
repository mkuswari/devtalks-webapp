import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setAuthUserActionCreator } from "../authUser/action";
import { getOwnProfile } from "../../services/users";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncIsPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { user } = await getOwnProfile();
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncIsPreloadProcess };
