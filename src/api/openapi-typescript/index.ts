import axios from "axios";
import {
  DynamicEndpoint,
  Endpoint,
  Methods,
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
  dynamicEndpoint,
  body,
}: {
  methods: M;
  endpoint: E;
  dynamicEndpoint?: DynamicEndpoint<M, E>;
  body?: RequestBody<M, E>;
}) => {
  return await axios[methods]<Response<M, E>>(
    `${BASE_URL}${dynamicEndpoint ?? endpoint}`,
    body
  );
};
