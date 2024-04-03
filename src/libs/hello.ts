import { client } from "./api";

export const hello = async () => {
  const response = await client.GET("/v2/hello");
  console.log(response);
};
