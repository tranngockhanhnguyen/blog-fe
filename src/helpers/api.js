import axios from "axios";

export default function requestApi(url, method, body, responseType = "json") {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  });

  instance.interceptors.request.use(
    (config) => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const originalConfig = err.config;
      console.log("Token expired");
      if (err.response && err.response.status === 419) {
        try {
          console.log("call new token");
          const res = await instance.post("/auth/refresh-token", {
            refresh_token: localStorage.getItem("refresh_token"),
          });
          localStorage.setItem("access_token", res.data.accessToken);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          originalConfig.headers.Authorization = `Bearer ${res.data.accessToken}`;
          instance(originalConfig);
        } catch (error) {
          if (error.response && error.response.status === 400) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/login";
          }
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );

  return instance.request({
    url,
    method,
    responseType,
    data: body,
  });
}
