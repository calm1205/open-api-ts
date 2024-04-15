import { snake2Camel } from "./snake2Camel";
import { Snake2Camel } from "./snake2Camel.type";

export const snake2CamelDeep = <T extends object | any[]>(
  argObject: T
): Snake2Camel<T> => {
  if (typeof argObject !== "object") return argObject;
  if (Array.isArray(argObject))
    return argObject.map(snake2CamelDeep) as Snake2Camel<T>;

  const camelizeObject = Object.entries(
    argObject as { [key: string]: any }
  ).reduce((acc, [key, value]) => {
    const camelKey = snake2Camel(key);
    acc[camelKey] = snake2CamelDeep(value);
    return acc;
  }, {} as { [key: string]: any });

  return camelizeObject as Snake2Camel<T>;
};
