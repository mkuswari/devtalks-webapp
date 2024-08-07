import axiosInstance from "../configs/axiosConfig";

async function createComment({ threadId, content }) {
  const response = await axiosInstance.post(`/threads/${threadId}/comments`, {
    content,
  });
  return response.data.data;
}

export { createComment };
