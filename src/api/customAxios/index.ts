import axios from "axios";
import { Endpoint, Methods, RequestBody, Response } from "./type";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張
 */
export const customAxios = <T extends Methods>({
  methods,
  endpoint,
  body,
}: {
  methods: T;
  endpoint: Endpoint<T>;
  body?: RequestBody<T, Endpoint<T>>;
}) => {
  return axios[methods]<Response<T, Endpoint<T>>>(
    `${BASE_URL}${endpoint}`,
    body
  );
};

// 使用例
// const getAllArticles = customAxios({
//   methods: "get",
//   endpoint: "/v1/articles",
// });
// const getOneArticle = customAxios({
//   methods: "get",
//   endpoint: "/v2/article/{id}",
// });
// const postArticle = customAxios({
//   methods: "post",
//   endpoint: "/v1/articles",
//   body: {},
// });
