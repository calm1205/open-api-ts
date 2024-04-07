import { customAxios } from ".";

export const articleApi = {
  /** 全ての記事を取得 */
  getAll: async () => {
    const response = await customAxios({
      methods: "get",
      endpoint: "/v1/articles",
    });
    console.log(response.data);
  },

  /** 指定の記事を取得 */
  getOne: async (articleId: number) => {
    const response = await customAxios({
      methods: "get",
      endpoint: "/v2/article/{id}",
    });

    console.log(response.data);
  },
};
