import type { paths } from "~/schema/openapi-typescript/schema";

// httpメソッド
export type Methods = "get" | "post" | "put" | "delete";

// endpointのURL
export type Endpoint<M extends Methods> = {
  [Key in keyof paths]: M extends keyof paths[Key] ? Key : never;
}[keyof paths];

/** path parameter */
export type Params<
  M extends Methods,
  E extends Endpoint<M>
> = M extends keyof paths[E]
  ? paths[E][M] extends { parameters: { path: infer T } }
    ? T extends { [key: string]: string | number }
      ? T
      : never
    : never
  : never;

/** endpointのURLにpath parameterを埋め込んだもの */
// type ConvertPathParams<
//   Path extends string,
//   Params extends { [key: string]: string | number }
// > = {
//   [Key in keyof Params]: Path extends `${infer Prefix}{${string &
//     Key}}${infer Suffix}`
//     ? ConvertPathParams<`${Prefix}${Params[Key]}${Suffix}`, Params>
//     : Path;
// }[keyof Params];

// export type DynamicEndpoint<
//   M extends Methods,
//   E extends Endpoint<M>
// > = ConvertPathParams<E, Params<M, E>>;

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
