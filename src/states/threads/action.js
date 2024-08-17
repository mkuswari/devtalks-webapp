import { hideLoading, showLoading } from "react-redux-loading-bar";
import { createThread } from "../../services/threads";
import {
  upVoteThread,
  downVoteThread,
  neutralizeThreadVote,
} from "../../services/votes";

const ActionType = {
  CREATE_THREAD: "CREATE_THREAD",
  RECEIVE_THREADS: "RECEIVE_THREADS",
  UP_VOTE_THREAD: "UP_VOTE_THREAD",
  DOWN_VOTE_THREAD: "DOWN_VOTE_THREAD",
  NEUTRALIZE_VOTE_THREAD: "NEUTRALIZE_VOTE_THREAD",
};

function addThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = "all" }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(
      upVoteThreadActionCreator({ threadId: threadId, userId: authUser?.id })
    );
    try {
      await upVoteThread(threadId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(
      downVoteThreadActionCreator({ threadId: threadId, userId: authUser?.id })
    );
    try {
      await downVoteThread(threadId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());
    dispatch(
      neutralizeVoteThreadActionCreator({ threadId, userId: authUser?.id })
    );
    try {
      await neutralizeThreadVote(threadId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  addThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
