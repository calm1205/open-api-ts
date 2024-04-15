import { camel2Snake } from "./camel2Snake";
import { Camel2Snake } from "./camel2Snake.type";

export const camel2SnakeDeep = <T extends object | any[]>(
  argObject: T
): Camel2Snake<T> => {
  if (typeof argObject !== "object") return argObject;
  if (Array.isArray(argObject))
    return argObject.map(camel2SnakeDeep) as Camel2Snake<T>;

  const snakeObject = Object.entries(
    argObject as { [key: string]: any }
  ).reduce((acc, [key, value]) => {
    const camelKey = camel2Snake(key);
    acc[camelKey] = camel2SnakeDeep(value);
    return acc;
  }, {} as { [key: string]: any });

  return snakeObject as Camel2Snake<T>;
};
