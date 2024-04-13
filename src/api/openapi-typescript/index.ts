import axios from "axios";
import { Endpoint, Methods, PathParams, RequestBody, Response } from "./type";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張
 */
export const customAxios = async <M extends Methods, E extends Endpoint<M>>({
  methods,
  endpoint,
  pathParams,
  body,
}: {
  methods: M;
  endpoint: E;
  pathParams?: PathParams<M, E>;
  body?: RequestBody<M, E>;
}) => {
  const dynamicEndpoint = pathParams
    ? getDynamicEndpoint(endpoint, pathParams)
    : endpoint;

  return await axios[methods]<Response<M, E>>(
    `${BASE_URL}${dynamicEndpoint}`,
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
