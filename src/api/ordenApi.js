import axios from "axios";
import { getEnvVar } from "../helpers";

const { VITE_API_URL_2 } = getEnvVar();

const ordenesApi = axios.create({
  baseURL: VITE_API_URL_2,
});

ordenesApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  return config;
});

export default ordenesApi;
