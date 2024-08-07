import axiosInstance from "../configs/axiosConfig";

async function upVoteThread(threadId) {
  const response = await axiosInstance.post(`/threads/${threadId}/up-vote`);
  return response;
}

async function downVoteThread(threadId) {
  const response = await axiosInstance.post(`/threads/${threadId}/down-vote`);
  return response;
}

async function neutralizeThreadVote(threadId) {
  const response = await axiosInstance.post(
    `/threads/${threadId}/neutral-vote`
  );
  return response;
}

async function upVoteComment(threadId, commentId) {
  const response = await axiosInstance.post(
    `/threads/${threadId}/comments/${commentId}/up-vote`
  );
  return response;
}

async function downVoteComment(threadId, commentId) {
  const response = await axiosInstance.post(
    `/threads/${threadId}/comments/${commentId}/down-vote`
  );
  return response;
}

async function neutralizeCommentVote(threadId, commentId) {
  const response = await axiosInstance.post(
    `/threads/${threadId}/comments/${commentId}/neutral-vote`
  );
  return response;
}

export {
  upVoteThread,
  downVoteThread,
  neutralizeThreadVote,
  upVoteComment,
  downVoteComment,
  neutralizeCommentVote,
};
