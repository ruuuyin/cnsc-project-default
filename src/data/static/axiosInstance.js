import axiosInstance from "axios";
import APP_CONFIG from "./config";

axiosInstance.defaults.baseURL = APP_CONFIG.url;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
