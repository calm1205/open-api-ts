/** ExperimentalWarning */
// import openapi from "../../schema/openapi.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { toCamelDeep } from "~/lib/toCamelDeep";

/**
 * openapi.jsonのスキーマをキャメルケースに変換
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.resolve(__dirname, "../../schema/openapi.json");
const openapi = fs.readFileSync(filepath, "utf8");
const openapiJson = JSON.parse(openapi);

const schemas = openapiJson.components.schemas;

const camelSchemas = toCamelDeep(schemas);

openapiJson.components.schemas = camelSchemas;

const outputPath = path.resolve(__dirname, "../../schema/openapiCamel.json");
fs.writeFileSync(outputPath, JSON.stringify(openapiJson, null, 2));
