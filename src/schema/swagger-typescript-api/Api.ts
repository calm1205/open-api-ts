/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 記事 */
export interface ArticleEntity {
  /**
   * 記事を一意に判定するid
   * @format int32
   */
  id?: number;
  /** 記事名 */
  name?: string;
  /** 記事内容 */
  body?: string;
  /**
   * 記事の作成日時
   * @format date-time
   */
  created_at?: string;
  /**
   * 記事の更新日時
   * @format date-time
   */
  updated_at?: string;
}

/** 記事の配列 */
export type ArticleEntities = ArticleEntity[];

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//localhost:3000/api",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title rest-api rails
 * @version 0.0.1
 * @baseUrl //localhost:3000/api
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description article entityを全て取得
     *
     * @name ArticlesList
     * @request GET:/v1/articles
     */
    articlesList: (
      query?: {
        /** asc or desc */
        order?: "asc" | "desc";
        /** ソートするカラム */
        order_by?: "id" | "created_at" | "updated_at";
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleEntities, void>({
        path: `/v1/articles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description articleの追加
     *
     * @name ArticlesCreate
     * @request POST:/v1/articles
     */
    articlesCreate: (data: ArticleEntity, params: RequestParams = {}) =>
      this.request<ArticleEntity, any>({
        path: `/v1/articles`,
        method: "POST",
        body: data,
        format: "json",
        ...params,
      }),

    /**
     * @description article(単体)の取得
     *
     * @name ArticleDetail
     * @request GET:/v1/article/{article_id}
     */
    articleDetail: (articleId: number, params: RequestParams = {}) =>
      this.request<ArticleEntity, any>({
        path: `/v1/article/${articleId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description articleの更新
     *
     * @name ArticleUpdate
     * @request PUT:/v1/article/{article_id}
     */
    articleUpdate: (
      articleId: number,
      data: ArticleEntity,
      params: RequestParams = {}
    ) =>
      this.request<ArticleEntity, any>({
        path: `/v1/article/${articleId}`,
        method: "PUT",
        body: data,
        format: "json",
        ...params,
      }),

    /**
     * @description articleの削除
     *
     * @name ArticleDelete
     * @request DELETE:/v1/article/{article_id}
     */
    articleDelete: (articleId: number, params: RequestParams = {}) =>
      this.request<ArticleEntity, any>({
        path: `/v1/article/${articleId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
