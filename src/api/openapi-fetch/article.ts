import { client } from "~/api/openapi-fetch/apiClient";

/**
 * openapi-fetchを活用
 */
export const articleApi = {
  /** user全ての取得 */
  getAll: async () => {
    const response = await client.GET("/v1/articles");
    const articles = response.data;
    console.log(articles);
  },
  getOne: async (articleId: number) => {
    const response = await client.GET("/v1/article/{id}", {
      params: {
        path: {
          id: articleId,
        },
      },
    });

    const article = response.data;
    console.log(article);
  },
};
