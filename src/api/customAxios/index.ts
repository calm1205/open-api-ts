import axios from "axios";
import { Endpoint, Methods, RequestBody, Response } from "./type";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張
 */
export const customAxios = async <M extends Methods, E extends Endpoint<M>>({
  methods,
  endpoint,
  body,
}: {
  methods: M;
  endpoint: E;
  body?: RequestBody<M, E>;
}) => {
  return await axios[methods]<Response<M, E>>(`${BASE_URL}${endpoint}`, body);
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
