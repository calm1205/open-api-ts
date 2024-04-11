import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "~/schema/schema";

const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: "http://localhost:3000/api/",
});

export const articleApi = {
  getAll: fetcher.path("/v1/articles").method("get").create(),
  getOne: fetcher.path("/v1/article/{id}").method("get").create(),
};
