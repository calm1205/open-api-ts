import { client } from "./api";

const email = "tarou.yamada@example.com";
const password = "9Km3u^6l3B&U4k!DqMvM";

export const login = async () => {
  try {
    const response = await client.POST("/v2/authentication", {
      body: { email, password },
    });
    console.log("Login success: ", response.data?.name);
    return response.data;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};
