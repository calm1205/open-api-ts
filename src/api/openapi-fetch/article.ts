import { client } from "~/api/openapi-fetch/apiClient";

/**
 * openapi-fetchを活用
 */
export const articleApi = {
  /** user全ての取得 */
  getAll: async () => {
    const response = await client.GET("/v1/articles", {
      params: { query: {} },
    });
    const articles = response.data;
    console.log(articles);
  },
  getOne: async (articleId: number) => {
    const response = await client.GET("/v1/article/{article_id}", {
      params: {
        path: {
          article_id: articleId,
        },
      },
    });

    const article = response.data;
    console.log(article);
  },
};
