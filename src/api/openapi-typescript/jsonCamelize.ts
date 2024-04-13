/** ExperimentalWarning */
// import openapi from "../../schema/openapi.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * openapi.jsonのスキーマをキャメルケースに変換
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.resolve(__dirname, "../../schema/openapi.json");
const openapi = fs.readFileSync(filepath, "utf8");
const openapiJson = JSON.parse(openapi);

const schemas = openapiJson.components.schemas;
const snakeToCamel = (str: string) =>
  str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );

const snakeToCamelDeep = (argObject: any) => {
  if (typeof argObject !== "object") return argObject;

  return Object.entries(argObject).reduce((acc, [key, value]) => {
    const camelKey = snakeToCamel(key);
    acc[camelKey] = snakeToCamelDeep(value);
    return acc;
  }, {} as { [key: string]: any });
};

const camelSchemas = snakeToCamelDeep(schemas);

openapiJson.components.schemas = camelSchemas;

const outputPath = path.resolve(__dirname, "../../schema/openapiCamel.json");
fs.writeFileSync(outputPath, JSON.stringify(openapiJson, null, 2));
