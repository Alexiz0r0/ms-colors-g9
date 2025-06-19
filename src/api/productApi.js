import axios from "axios";
import { getEnvVar } from "../helpers";

const { VITE_API_URL_3 } = getEnvVar();

const productApi = axios.create({
  baseURL: VITE_API_URL_3,
});

productApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    ...config.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  return config;
});

export default productApi;
