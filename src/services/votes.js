import axiosInstance from "../configs/axiosConfig";

async function upVoteThread(threadId) {
  try {
    const response = await axiosInstance.post(`/threads/${threadId}/up-vote`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function downVoteThread(threadId) {
  try {
    const response = await axiosInstance.post(`/threads/${threadId}/down-vote`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function neutralizeThreadVote(threadId) {
  try {
    const response = await axiosInstance.post(
      `/threads/${threadId}/neutral-vote`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function upVoteComment(threadId, commentId) {
  try {
    const response = await axiosInstance.post(
      `/threads/${threadId}/comment/${commentId}/up-vote`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function downVoteComment(threadId, commentId) {
  try {
    const response = await axiosInstance.post(
      `/threads/${threadId}/comment/${commentId}/down-vote`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function neutralizeCommentVote(threadId, commentId) {
  try {
    const response = await axiosInstance.post(
      `/threads/${threadId}/comment/${commentId}/neutral-vote`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  upVoteThread,
  downVoteThread,
  neutralizeThreadVote,
  upVoteComment,
  downVoteComment,
  neutralizeCommentVote,
};
