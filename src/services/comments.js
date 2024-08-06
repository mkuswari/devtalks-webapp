import axiosInstance from "../configs/axiosConfig";

async function createComment({ threadId, content }) {
  try {
    const response = await axiosInstance.post(`/threads/${threadId}/comments`, {
      content,
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export { createComment };
