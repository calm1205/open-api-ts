import { client } from "~/api/api";

export const userApi = {
  /** user全ての取得 */
  getAll: async () => {
    const response = await client.GET("/v2/user");
    const users = response.data;
    console.log(users);
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
