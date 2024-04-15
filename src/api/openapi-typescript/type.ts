import type { paths } from "~/schema/openapi-typescript/schema";

// httpメソッド
export type Methods = "get" | "post" | "put" | "delete";

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
    ? paths[Key][M] extends { parameters: { query: infer T } }
      ? T extends { [key: string]: string | number }
        ? T
        : never
      : never
    : never;
}[Endpoint<M>];

// 2xx番台のレスポンス
export type Response<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      responses: { 200: { content: { "application/json": infer T } } };
    }
    ? T
    : never
  : never;

// リクエストボディ
export type RequestBody<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends {
      requestBody: { content: { "application/json": infer T } };
    }
    ? T
    : never
  : never;

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

type Sample = DynamicEndpoint<"get">;
