import axiosInstance from "../configs/axiosConfig";

async function seeLeaderboards() {
  const response = await axiosInstance.get("/leaderboards");
  return response.data;
}

export { seeLeaderboards };
