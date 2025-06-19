import axios from "axios";
import { getEnvVar } from "../helpers";

const { VITE_API_URL } = getEnvVar();

const authApi = axios.create({
  baseURL: VITE_API_URL,
});

authApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem("token"),
  };

  return config;
});

export default authApi;
