import axiosInstance from "../configs/axiosConfig";

async function registerUser({ name, email, password }) {
  const response = await axiosInstance.post("/register", {
    name,
    email,
    password,
  });

  return response.data;
}

async function loginUser({ email, password }) {
  const response = await axiosInstance.post("/login", {
    email,
    password,
  });

  return response.data;
}

async function getAllUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

async function getOwnProfile() {
  const response = await axiosInstance.get("/users/me");
  return response.data;
}

export { registerUser, loginUser, getAllUsers, getOwnProfile };
