/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v2/user": {
    /** user entityを全て取得 */
    get: {
      responses: {
        /** get user */
        200: {
          content: {
            "application/json": components["schemas"]["userEntities"];
          };
        };
        /** userが存在しない */
        404: unknown;
      };
    };
    /** userの追加 */
    post: {
      responses: {
        /** post user */
        200: {
          content: {
            "application/json": components["schemas"]["userEntity"];
          };
        };
      };
      requestBody: components["requestBodies"]["userEntity"];
    };
  };
  "/v2/user/{id}": {
    /** user(単体)の取得 */
    get: {
      parameters: {
        path: {
          /** user id */
          id: number;
        };
      };
      responses: {
        /** get user */
        200: {
          content: {
            "application/json": components["schemas"]["userEntity"];
          };
        };
      };
    };
    /** userの更新 */
    put: {
      parameters: {
        path: {
          /** user id */
          id: number;
        };
      };
      responses: {
        /** put user */
        200: {
          content: {
            "application/json": components["schemas"]["userEntity"];
          };
        };
      };
      requestBody: components["requestBodies"]["userEntity"];
    };
    /** userの削除 */
    delete: {
      parameters: {
        path: {
          /** user id */
          id: number;
        };
      };
      responses: {
        /** delete user */
        200: {
          content: {
            "application/json": components["schemas"]["userEntity"];
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /** @description ユーザー */
    userEntity: {
      /**
       * Format: int32
       * @description ユーザーを一意に判定するid
       */
      id?: number;
      /** @description 氏名 */
      name?: string;
      /**
       * Format: int32
       * @description 年齢
       */
      age?: number;
      /**
       * @description 所属部署
       * @enum {string}
       */
      domain?: "tech" | "sales" | "cs";
    };
    /** @description ユーザーの配列 */
    userEntities: components["schemas"]["userEntity"][];
    /** @description 使用されていないエンティティ */
    unusedEntity: {
      /**
       * Format: int32
       * @description 使用されていないエンティティを一意に判定するid
       */
      id?: number;
    };
  };
  requestBodies: {
    /** userのリクエスト */
    userEntity: {
      content: {
        "application/json": components["schemas"]["userEntity"];
      };
    };
  };
}

export interface operations {}

export interface external {}
