import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import router from "@/router/index";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_BACKEND_URL,
  timeout: 15000,
});

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      const authStore = useAuthStore();
      authStore.authenticated = false;
      router.push("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
