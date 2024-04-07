import type { paths } from "~/schema/schema";

// httpメソッド
export type Methods = "get" | "post" | "put" | "delete";

// endpointのURL
export type Endpoint<M extends Methods> = {
  [Key in keyof paths]: M extends keyof paths[Key] ? Key : never;
}[keyof paths];

// 2xx番台のレスポンス
export type Response<
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
export type RequestBody<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      requestBody: { content: { "application/json": any } };
    }
    ? paths[E][M]["requestBody"]["content"]["application/json"]
    : never
  : never;
