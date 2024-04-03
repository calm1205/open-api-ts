import { client } from "./api";

export const me = client.GET("/v2/user/me");
