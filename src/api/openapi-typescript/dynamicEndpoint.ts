import axios from "axios";
import {
  DynamicEndpoint,
  Endpoint,
  Methods,
  QueryParams,
  RequestBody,
  Response,
} from "./type";

const BASE_URL = "http://localhost:3000/api";

export const customAxiosDynamic = async <M extends Methods>({
  methods,
  endpoint,
  queryParams,
  body,
}: {
  methods: M;
  endpoint: DynamicEndpoint<M>;
  queryParams?: QueryParams<M>;
  body?: RequestBody<M, Endpoint<M>>;
}) => {
  return await axios[methods]<Response<M, Endpoint<M>>>(
    `${BASE_URL}${endpoint}${getQueryParams(queryParams)}`,
    body
  );
};

const getQueryParams = (queryParams?: { [key: string]: string | number }) => {
  if (!queryParams) return "";
  return Object.entries(queryParams).reduce((acc, [key, value]) => {
    acc += `${key}=${value}&`;

    return acc;
  }, "?");
};

const getArticle = customAxiosDynamic({
  methods: "get",
  endpoint: "/v1/articles",
});

getArticle;
