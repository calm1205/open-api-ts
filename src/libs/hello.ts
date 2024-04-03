import { client } from "./api";

export const hello = async () => {
  const { data } = await client.GET("/v2/hello");
  console.log(data);
};
