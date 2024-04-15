import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "~/schema/openapi-typescript/schema";

const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: "http://localhost:3000/api",
});

export const articleApi = {
  getAll: async () => {
    const fetch = fetcher.path("/v1/articles").method("get").create();
    const { data } = await fetch({ order: "asc", order_by: "id" });
    console.log(data);
    return data;
  },
  getOne: async (articleId: number) => {
    const fetch = fetcher
      .path("/v1/article/{article_id}")
      .method("get")
      .create();

    const { data } = await fetch({ article_id: articleId });
    console.log(data);
    return data;
  },
};
