import createClient from "openapi-fetch";
import type { paths } from "~/schema/clm_schema";

const baseUrl = "http://local1.clm.localhost:5173/api/";
export const client = createClient<paths>({ baseUrl });
