import axios from "axios";
import {
  // DynamicEndpoint,
  Endpoint,
  Methods,
  PathParams,
  QueryParams,
  RequestBody,
  Response,
} from "./type";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張
 */
export const customAxios = async <M extends Methods, E extends Endpoint<M>>({
  methods,
  endpoint,
  pathParams,
  queryParams,
  body,
}: {
  methods: M;
  endpoint: E;
  pathParams?: PathParams<M>;
  queryParams?: QueryParams<M>;
  body?: RequestBody<M, E>;
}) => {
  const dynamicEndpoint = pathParams
    ? getDynamicEndpoint(endpoint, pathParams)
    : endpoint;

  return await axios[methods]<Response<M, E>>(
    `${BASE_URL}${dynamicEndpoint}${getQueryParams(queryParams)}`,
    body
  );
};

const getDynamicEndpoint = (
  endpoint: string,
  pathParams: { [key: string]: string | number }
) => {
  const dynamicEndpoint = Object.entries(pathParams).reduce(
    (acc, [key, value]) => {
      acc += endpoint.replace(`{${key}}`, value.toString());

      return acc;
    },
    ""
  );
  return dynamicEndpoint;
};

const getQueryParams = (queryParams?: { [key: string]: string | number }) => {
  if (!queryParams) return "";
  return Object.entries(queryParams).reduce((acc, [key, value]) => {
    acc += `${key}=${value}&`;

    return acc;
  }, "?");
};

// export const customAxiosDynamic = async <M extends Methods>({
//   methods,
//   endpoint,
//   queryParams,
//   body,
// }: {
//   methods: M;
//   endpoint: DynamicEndpoint<M>;
//   queryParams?: QueryParams<M>;
//   body?: RequestBody<M, Endpoint<M>>;
// }) => {
//   return await axios[methods]<Response<M, Endpoint<M>>>(
//     `${BASE_URL}${endpoint}${getQueryParams(queryParams)}`,
//     body
//   );
// };

// const getArticle = customAxiosDynamic({
//   methods: "get",
//   endpoint: "/v1/articles",
// });
