import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://meme-back-end-production.up.railway.app",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
