import axios from "axios";
import { getTokenFromLocalStorage } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: "https://forum-api.dicoding.dev/v1",
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
