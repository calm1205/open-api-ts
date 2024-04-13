/** ExperimentalWarning */
// import openapi from "../../schema/openapi.json" assert { type: "json" };

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.resolve(__dirname, "../../schema/openapi.json");
const content = fs.readFileSync(filepath, "utf8");

console.log(content);
