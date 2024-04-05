import axios from "axios";
import type { paths } from "~/schema/schema";

// httpメソッド
type Methods = "get" | "post" | "put" | "delete";

// endpointのURL
type Endpoint<M extends Methods> = {
  [Key in keyof paths]: M extends keyof paths[Key] ? Key : never;
}[keyof paths];

// 2xx番台のレスポンス
type Response<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      responses: { 200: { content: { "application/json": any } } };
    }
    ? paths[E][M]["responses"][200]["content"]["application/json"]
    : never
  : never;

// リクエストボディ
type RequestBody<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      requestBody: { content: { "application/json": any } };
    }
    ? paths[E][M]["requestBody"]["content"]["application/json"]
    : never
  : never;

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
  return () => axios[methods]<Response<T, Endpoint<T>>>(endpoint, body);
};

// 使用例
const getAllUser = customAxios({ methods: "get", endpoint: "/v2/user" });
const getOneUser = customAxios({ methods: "get", endpoint: "/v2/user/{id}" });
const postUser = customAxios({
  methods: "post",
  endpoint: "/v2/user",
  body: { id: 1, name: "test", age: 20, domain: "tech" },
});
