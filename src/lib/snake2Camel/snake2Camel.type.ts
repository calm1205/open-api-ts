type Snake2CamelString<T extends string> = T extends `${infer R}_${infer U}`
  ? `${R}${Capitalize<Snake2CamelString<U>>}`
  : T;

type Snake2CamelArray<T extends any[]> = Snake2CamelObject<T[number]>[];

export type Snake2CamelObject<T> = {
  [K in keyof T as `${Snake2CamelString<string & K>}`]: Snake2CamelObject<T[K]>;
};

export type Snake2Camel<T extends object | any[]> = T extends any[]
  ? Snake2CamelArray<T>
  : Snake2CamelObject<T>;
