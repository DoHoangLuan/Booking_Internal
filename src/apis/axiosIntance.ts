import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  timeout: 30000,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers["access-token-staff"] = accessToken;
  }
  return config;
});
export default axiosInstance;
