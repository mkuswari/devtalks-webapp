import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getAllUsers } from "../../services/users";
import { getAllThreads } from "../../services/threads";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { users } = await getAllUsers();
      const { threads } = await getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
