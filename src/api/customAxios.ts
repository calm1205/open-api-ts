import axios from "axios";
import type { paths } from "~/schema/schema";

type Methods = "get" | "post" | "put" | "delete";
type Endpoint<M extends Methods> = {
  [Key in keyof paths]: M extends keyof paths[Key] ? Key : never;
}[keyof paths];

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

/**
 * axiosの拡張
 */
export const customAxios = <T extends Methods>({
  methods,
  endpoint,
}: {
  methods: T;
  endpoint: Endpoint<T>;
}) => {
  return axios[methods]<Response<T, Endpoint<T>>>(endpoint);
};

const { data } = await customAxios({ methods: "get", endpoint: "/v2/user" });
console.log(data);
