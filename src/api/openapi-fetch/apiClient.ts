import createClient from "openapi-fetch";
import type { paths } from "~/schema/openapi-typescript/schema";

const baseUrl = "http://localhost:3000/api/";
export const client = createClient<paths>({ baseUrl });
