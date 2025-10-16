import axios from "axios";
import { setupInterceptors } from "./interceptors";

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiClient);

export default apiClient;
