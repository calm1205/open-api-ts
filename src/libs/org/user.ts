import { client } from "~/libs/org/api";

export const userApi = {
  /** user全ての取得 */
  getAll: async () => {
    const response = await client.GET("/v2/user");
    console.log(response);
  },
  getOne: async (userId: number) => {
    const response = await client.GET(`/v2/user/{id}`, {
      params: {
        path: {
          id: userId,
        },
      },
    });
    const user = response.data;
    console.log(user);
  },
};
