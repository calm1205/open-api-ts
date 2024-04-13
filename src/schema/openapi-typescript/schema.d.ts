/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v1/articles": {
    /** article entityを全て取得 */
    get: {
      parameters: {
        query: {
          /** asc or desc */
          order?: "asc" | "desc";
          /** ソートするカラム */
          order_by?: "id" | "created_at" | "updated_at";
        };
      };
      responses: {
        /** get article */
        200: {
          content: {
            "application/json": components["schemas"]["articleEntities"];
          };
        };
        /** articleが存在しない */
        404: unknown;
      };
    };
    /** articleの追加 */
    post: {
      responses: {
        /** post article */
        200: {
          content: {
            "application/json": components["schemas"]["articleEntity"];
          };
        };
      };
      requestBody: components["requestBodies"]["articleEntity"];
    };
  };
  "/v1/article/{id}": {
    /** article(単体)の取得 */
    get: {
      parameters: {
        path: {
          /** article id */
          id: number;
        };
      };
      responses: {
        /** get article */
        200: {
          content: {
            "application/json": components["schemas"]["articleEntity"];
          };
        };
      };
    };
    /** articleの更新 */
    put: {
      parameters: {
        path: {
          /** article id */
          id: number;
        };
      };
      responses: {
        /** put article */
        200: {
          content: {
            "application/json": components["schemas"]["articleEntity"];
          };
        };
      };
      requestBody: components["requestBodies"]["articleEntity"];
    };
    /** articleの削除 */
    delete: {
      parameters: {
        path: {
          /** article id */
          id: number;
        };
      };
      responses: {
        /** delete article */
        200: {
          content: {
            "application/json": components["schemas"]["articleEntity"];
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /** @description 記事 */
    articleEntity: {
      /**
       * Format: int32
       * @description 記事を一意に判定するid
       */
      id?: number;
      /** @description 記事名 */
      name?: string;
      /** @description 記事内容 */
      body?: string;
    };
    /** @description 記事の配列 */
    articleEntities: components["schemas"]["articleEntity"][];
  };
  requestBodies: {
    /** articleのリクエスト */
    articleEntity: {
      content: {
        "application/json": components["schemas"]["articleEntity"];
      };
    };
  };
}

export interface operations {}

export interface external {}
