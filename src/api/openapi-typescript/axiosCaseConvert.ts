import axios, { AxiosResponse } from "axios";
import {
  Endpoint,
  Methods,
  PathParams,
  QueryParams,
  RequestBody,
  SuccessResponse,
} from "./type";
import {
  Snake2Camel,
  Snake2CamelObject,
} from "~/lib/snake2Camel/snake2Camel.type";
import { camel2SnakeDeep } from "~/lib/camel2Snake/camel2SnakeDeep";
import { snake2CamelDeep } from "~/lib/snake2Camel/snake2CamelDeep";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張 snake_case -> camelCase
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
  pathParams?: Snake2CamelObject<PathParams<M>>;
  queryParams?: Snake2CamelObject<QueryParams<M>>;
  body?: Snake2Camel<RequestBody<M, E>>;
}): Promise<AxiosResponse<Snake2Camel<SuccessResponse<M, E>>>> => {
  const dynamicEndpoint = pathParams
    ? getDynamicEndpoint(endpoint, camel2SnakeDeep(pathParams))
    : endpoint;

  const response = await axios[methods]<SuccessResponse<M, E>>(
    `${BASE_URL}${dynamicEndpoint}${getQueryParams(queryParams)}`,
    body
  );

  return {
    ...response,
    data: snake2CamelDeep(response.data),
  };
};

const getDynamicEndpoint = (endpoint: string, pathParams: object) => {
  const dynamicEndpoint = Object.entries(pathParams).reduce(
    (acc, [key, value]) => {
      acc += endpoint.replace(`{${key}}`, value.toString());

      return acc;
    },
    ""
  );
  return dynamicEndpoint;
};

const getQueryParams = (queryParams?: object) => {
  if (!queryParams) return "";
  const camelQueryParams = camel2SnakeDeep(queryParams);
  return Object.entries(camelQueryParams).reduce((acc, [key, value]) => {
    acc += `${key}=${value}&`;

    return acc;
  }, "?");
};
