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
      endpoint: `/v2/article/${articleId}`,
    });

    console.log(response.data);
  },

  /** 記事の作成 */
  create: async () => {
    const response = await customAxios({
      methods: "post",
      endpoint: "/v1/articles",
      body: {
        name: "hoge",
        body: "body",
      },
    });

    return response.data.id;
  },

  /** 記事の削除 */
  delete: async () => {
    const response = await customAxios({
      methods: "delete",
      endpoint: "/v2/article/{id}",
    });

    return response;
  },
};
