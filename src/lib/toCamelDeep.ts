import { toCamel } from "./toCamel";

type SnakeToCamelString<T extends string> = T extends `${infer R}_${infer U}`
  ? `${R}${Capitalize<SnakeToCamelString<U>>}`
  : T;

type SnakeToCamelArray<T extends any[]> = SnakeToCamelObject<T[number]>[];

type SnakeToCamelObject<T> = {
  [K in keyof T as `${SnakeToCamelString<string & K>}`]: SnakeToCamelObject<
    T[K]
  >;
};

type SnakeToCamel<T extends object | any[]> = T extends any[]
  ? SnakeToCamelArray<T>
  : SnakeToCamelObject<T>;

export const toCamelDeep = <T extends object | any[]>(
  argObject: T
): SnakeToCamel<T> => {
  if (typeof argObject !== "object") return argObject;
  if (Array.isArray(argObject))
    return argObject.map(toCamelDeep) as SnakeToCamel<T>;

  const camelizeObject = Object.entries(
    argObject as { [key: string]: any }
  ).reduce((acc, [key, value]) => {
    const camelKey = toCamel(key);
    acc[camelKey] = toCamelDeep(value);
    return acc;
  }, {} as { [key: string]: any });

  return camelizeObject as SnakeToCamel<T>;
};
