import { api } from "./api";

export const articleApi = {
  getAll: async () => {
    const response = await api.v1.articlesList();
    console.log(response.data);
    return response.data;
  },
  getOne: async (articleId: number) => {
    const response = await api.v1.articleDetail(articleId);
    console.log(response.data);
    return response.data;
  },
};
