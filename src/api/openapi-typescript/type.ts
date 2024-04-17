import type { paths } from "~/schema/openapi-typescript/schema";

// httpメソッド
export type Methods = "get" | "post" | "put" | "patch" | "delete";

// endpointのURL
export type Endpoint<M extends Methods> = {
  [Key in keyof paths]: M extends keyof paths[Key] ? Key : never;
}[keyof paths];

/** path parameter */
export type PathParams<M extends Methods> = {
  [Key in Endpoint<M>]: M extends keyof paths[Key]
    ? paths[Key][M] extends { parameters: { path: infer T } }
      ? T extends { [key: string]: string | number }
        ? T
        : never
      : never
    : never;
}[Endpoint<M>];

/** query parameter */
export type QueryParams<M extends Methods> = {
  [Key in Endpoint<M>]: M extends keyof paths[Key]
    ? paths[Key][M] extends { parameters: { query?: infer T } }
      ? T extends { [key: string]: string | number }
        ? T
        : never
      : never
    : never;
}[Endpoint<M>];

type SuccessCode = 200 | 201 | 202 | 204 | 205 | 206 | 207 | 208 | 226;

export type Api<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[Endpoint<M>] ? paths[E][M] : never;

type Response<M extends Methods, E extends Endpoint<M>> = {
  [K in keyof Api<M, E>]: K extends "responses" ? Api<M, E>[K] : never;
}[keyof Api<M, E>];

type PickContent<T> = T extends { content: { "application/json": infer U } }
  ? U extends object
    ? U
    : never
  : never;

// 2xx番台のレスポンス
export type SuccessResponse<
  M extends Methods,
  E extends Endpoint<M>
> = PickContent<
  {
    [K in keyof Response<M, E>]: K extends SuccessCode
      ? Response<M, E>[K]
      : never;
  }[keyof Response<M, E>]
>;

// リクエストボディ
export type RequestBody<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      requestBody: { content: { "application/json": infer T } };
    }
    ? T extends object
      ? T
      : never
    : never
  : never;
