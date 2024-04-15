type Camel2SnakeString<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T>
      ? "_"
      : ""}${Lowercase<T>}${Camel2SnakeString<U>}`
  : S;

type Camel2SnakeArray<T extends any[]> = Camel2SnakeObject<T[number]>[];

type Camel2SnakeObject<T> = {
  [K in keyof T as `${Camel2SnakeString<string & K>}`]: Camel2SnakeObject<T[K]>;
};

export type Camel2Snake<T extends object | any[]> = T extends any[]
  ? Camel2SnakeArray<T>
  : Camel2SnakeObject<T>;
