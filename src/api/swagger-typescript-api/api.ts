import { Api } from "~/schema/swagger-typescript-api/Api";

export const api = new Api({
  baseURL: "http://localhost:3000/api/",
});

export const axiosInstance = api.instance;
axiosInstance.interceptors.request.use(
  (response) => {
    console.log(response);
    return {
      ...response,
    };
  },
  (error) => {
    console.error(error);
  }
);
