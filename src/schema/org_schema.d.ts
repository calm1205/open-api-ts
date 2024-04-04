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
          schema: definitions["userEntities"];
        };
      };
    };
    /** userの追加 */
    post: {
      parameters: {
        body: {
          /** userのリクエスト */
          user: definitions["userEntity"];
        };
      };
      responses: {
        /** post user */
        200: {
          schema: definitions["userEntity"];
        };
      };
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
          schema: definitions["userEntity"];
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
        body: {
          /** userのリクエスト */
          user: definitions["userEntity"];
        };
      };
      responses: {
        /** put user */
        200: {
          schema: definitions["userEntity"];
        };
      };
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
          schema: definitions["userEntity"];
        };
      };
    };
  };
}

export interface definitions {
  /** @description user entity */
  userEntity: {
    /**
     * Format: int32
     * @description user id
     */
    id?: number;
    /** @description user name */
    name?: string;
    /**
     * Format: int32
     * @description user age
     */
    age?: number;
  };
  /** @description user entityの配列 */
  userEntities: definitions["userEntity"][];
}

export interface operations {}

export interface external {}
