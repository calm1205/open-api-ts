import createClient, { Middleware } from "openapi-fetch";
import { camel2SnakeDeep } from "~/lib/camel2Snake/camel2SnakeDeep";
import { Snake2CamelObject } from "~/lib/snake2Camel/snake2Camel.type";
// import { snake2CamelDeep } from "~/lib/snake2Camel/snake2CamelDeep";
import type { paths } from "~/schema/openapi-typescript/schema";

const baseUrl = "http://localhost:3000/api/";

type CamelPaths = {
  [Path in keyof paths]: {
    [Methods in keyof paths[Path]]: {
      [Key in keyof paths[Path][Methods]]: Key extends "parameters"
        ? Snake2CamelObject<paths[Path][Methods][Key]>
        : Key extends "responses"
        ? Snake2CamelObject<paths[Path][Methods][Key]>
        : paths[Path][Methods][Key];
    };
  };
};

const middleware: Middleware = {
  async onRequest(req, _options) {
    const query = req.params.query;
    const path = req.params.path;

    const customRequest = {
      ...req,
      params: {
        ...req.params,
        query: query ? camel2SnakeDeep(query) : undefined,
        path: path ? camel2SnakeDeep(path) : undefined,
      },
    };

    return req;
  },
  async onResponse(res, _options) {
    const { body, ...responseOption } = res;
    const response = new Response(body, { ...responseOption });

    return response;
  },
};

export const client = createClient<CamelPaths>({ baseUrl });
client.use(middleware);
