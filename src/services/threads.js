import axiosInstance from "../configs/axiosConfig";

async function createThread({ title, body, category }) {
  const response = await axiosInstance.post("/threads", {
    title,
    body,
    category,
  });
  return response.data.data;
}

async function getAllThreads() {
  const response = await axiosInstance.get("/threads");
  return response.data.data;
}

async function seeDetailThreads(id) {
  const response = await axiosInstance.get(`/threads/${id}`);
  return response.data.data.detailThread;
}

export { createThread, getAllThreads, seeDetailThreads };
