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

const path = `/v1/articles/{id}`;
const path2 = `/v1/articles/{id}/{another_id}`;
type ConvertPath<
  Path extends string,
  ParamKey extends string,
  ParamType extends string | number
> = Path extends `${infer Prefix}{${ParamKey}}${infer Suffix}`
  ? `${Prefix}${ParamType}${Suffix}`
  : never;

type ConvertPathParams<
  Path extends string,
  Params extends { [key: string]: string | number }
> = {
  [Key in keyof Params]: Path extends `${infer Prefix}{${string &
    Key}}${infer Suffix}`
    ? `${Prefix}${Params[Key]}${Suffix}`
    : never;
};

type ConvertPathParams2<
  Path extends string,
  Params extends { [key: string]: string | number }
> = {
  [Key in keyof Params]: Path extends `${infer Prefix}{${string &
    Key}}${infer Suffix}`
    ? ConvertPathParams2<`${Prefix}${Params[Key]}${Suffix}`, Params>
    : Path;
}[keyof Params];

type CustomPath = ConvertPath<typeof path, "id", number>;
const customPath: CustomPath = `/v1/articles/9`;

type CustomPath2 = ConvertPathParams2<
  typeof path2,
  { id: string; another_id: number }
>;
const customPath2: CustomPath2 = `/v1/articles/9/0`;
