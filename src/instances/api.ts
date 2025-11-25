import axios from "axios";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_APP_V5_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    console.log("INTERCEPTOR TOKEN:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
