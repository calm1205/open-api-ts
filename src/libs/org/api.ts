import createClient from "openapi-fetch";
import type { paths } from "~/schema/schema";

const baseUrl = "http://localhost:9999/api/";
export const client = createClient<paths>({ baseUrl });
