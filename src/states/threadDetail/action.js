import { hideLoading, showLoading } from "react-redux-loading-bar";
import { seeDetailThreads } from "../../services/threads";
import {
  downVoteThread,
  neutralizeThreadVote,
  upVoteThread,
  upVoteComment,
  downVoteComment,
  neutralizeCommentVote,
} from "../../services/votes";
import { createComment } from "../../services/comments";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  UP_VOTE_THREAD_DETAIL: "UP_VOTE_THREAD_DETAIL",
  DOWN_VOTE_THREAD_DETAIL: "DOWN_VOTE_THREAD_DETAIL",
  NEUTRALIZE_VOTE_THREAD_DETAIL: "NEUTRALIZE_VOTE_THREAD_DETAIL",
  CREATE_COMMENT: "CREATE_COMMENT",
  UP_VOTE_COMMENT: "UP_VOTE_COMMENT",
  DOWN_VOTE_COMMENT: "DOWN_VOTE_COMMENT",
  NEUTRALIZE_VOTE_COMMENT: "NEUTRALIZE_VOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await seeDetailThreads(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { threadDetail, authUser } = getState();
    dispatch(showLoading());
    dispatch(upVoteThreadDetailActionCreator(authUser?.id));
    try {
      await upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { threadDetail, authUser } = getState();
    dispatch(showLoading());
    dispatch(downVoteThreadDetailActionCreator(authUser?.id));
    try {
      await downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { threadDetail, authUser } = getState();
    dispatch(showLoading());
    dispatch(neutralizeThreadDetailActionCreator(authUser?.id));
    try {
      await neutralizeThreadVote(threadDetail.id);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateComment({ content }) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());
    try {
      const { comment } = await createComment({
        content,
        threadId: threadDetail.id,
      });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(upVoteCommentActionCreator(commentId, authUser?.id));
    dispatch(showLoading());
    try {
      await upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(showLoading());
    dispatch(downVoteCommentActionCreator(commentId, authUser?.id));
    try {
      await downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(showLoading());
    dispatch(neutralizeVoteCommentActionCreator(commentId, authUser?.id));
    try {
      await neutralizeCommentVote(threadDetail.id, commentId);
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownComment,
  asyncNeutralizeVoteComment,
};
