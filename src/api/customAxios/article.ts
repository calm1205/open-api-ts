import { customAxios } from ".";

export const articleApi = {
  /** 全ての記事を取得 */
  getAll: async () => {
    const response = await customAxios({
      methods: "get",
      endpoint: "/v1/articles",
    });
    console.log(response.data);
    return response.data;
  },

  /** 指定の記事を取得 */
  getOne: async (articleId: number) => {
    const response = await customAxios({
      methods: "get",
      endpoint: "/v1/article/{id}",
      dynamicEndpoint: `/v1/article/${articleId}`,
    });

    console.log(response.data);
    return response.data;
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

    console.log(response.data);

    return response.data;
  },

  /** 記事の削除 */
  delete: async () => {
    const response = await customAxios({
      methods: "delete",
      endpoint: "/v1/article/{id}",
      dynamicEndpoint: "/v1/article/1",
    });
    console.log(response.data);

    return response.data;
  },
};
