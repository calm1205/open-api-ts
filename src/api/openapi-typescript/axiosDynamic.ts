import axios from "axios";
import {
  Endpoint,
  Methods,
  PathParams,
  QueryParams,
  RequestBody,
  Response,
} from "./type";

const BASE_URL = "http://localhost:3000/api";

/** endpointのURLにpath parameterを埋め込んだもの */
type ConvertPathParams<
  Path extends string,
  Params extends { [key: string]: string | number }
> = Path extends `${infer Prefix}{${infer K}}${infer Suffix}`
  ? ConvertPathParams<`${Prefix}${Params[K]}${Suffix}`, Params>
  : `${Path}`;

export type DynamicEndpoint<M extends Methods> = ConvertPathParams<
  Endpoint<M>,
  PathParams<M>
>;

/**
 * @experimental
 * `/v1/article/${number}`のようなpathParamsを埋め込んだendpointを返す想定
 */
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
