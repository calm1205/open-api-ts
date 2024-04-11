/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { articleEntities } from "../models/articleEntities";
import type { articleEntity } from "../models/articleEntity";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DefaultService {
  /**
   * article entityを全て取得
   * @returns articleEntities get article
   * @throws ApiError
   */
  public static getV1Articles(): CancelablePromise<articleEntities> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/articles",
      errors: {
        404: `articleが存在しない`,
      },
    });
  }
  /**
   * articleの追加
   * @param requestBody articleのリクエスト
   * @returns articleEntity post article
   * @throws ApiError
   */
  public static postV1Articles(
    requestBody: articleEntity
  ): CancelablePromise<articleEntity> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/v1/articles",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * article(単体)の取得
   * @param id article id
   * @returns articleEntity get article
   * @throws ApiError
   */
  public static getV1Article(id: number): CancelablePromise<articleEntity> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/article/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * articleの更新
   * @param id article id
   * @param requestBody articleのリクエスト
   * @returns articleEntity put article
   * @throws ApiError
   */
  public static putV1Article(
    id: number,
    requestBody: articleEntity
  ): CancelablePromise<articleEntity> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/v1/article/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * articleの削除
   * @param id article id
   * @returns articleEntity delete article
   * @throws ApiError
   */
  public static deleteV1Article(id: number): CancelablePromise<articleEntity> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/v1/article/{id}",
      path: {
        id: id,
      },
    });
  }
}
