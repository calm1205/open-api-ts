import axios from "axios";
import { Endpoint, Methods, Params, RequestBody, Response } from "./type";

const BASE_URL = "http://localhost:3000/api";

/**
 * axiosの拡張
 */
export const customAxios = async <M extends Methods, E extends Endpoint<M>>({
  methods,
  endpoint,
  params,
  body,
}: {
  methods: M;
  endpoint: E;
  params?: Params<M, E>;
  body?: RequestBody<M, E>;
}) => {
  const dynamicEndpoint = params
    ? getDynamicEndpoint(endpoint, params)
    : endpoint;

  return await axios[methods]<Response<M, E>>(
    `${BASE_URL}${dynamicEndpoint}`,
    body
  );
};

const getDynamicEndpoint = (
  endpoint: string,
  params: { [key: string]: string | number }
) => {
  const dynamicEndpoint = Object.entries(params).reduce((acc, [key, value]) => {
    acc += endpoint.replace(`{${key}}`, value.toString());

    return acc;
  }, "");

  return dynamicEndpoint;
};
