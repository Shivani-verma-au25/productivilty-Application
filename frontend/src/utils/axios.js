import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_APP_API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
