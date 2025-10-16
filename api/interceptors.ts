import { AxiosInstance } from "axios";

export const setupInterceptors = (api: AxiosInstance) => {
  api.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Error API:", error.response?.data || error.message);
      return Promise.reject(error.response?.data || error.message);
    }
  );
};
