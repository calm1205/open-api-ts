# openapi2typescript

<br/>

## [openapi-typescript](https://openapi-ts.pages.dev/)

`openapi-typescript` は OpenAPI から TypeScript の型のみを生成するツール

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| x                   | ○            | ○         | ○              |

<br/>

以下のコマンドで`https://github.com/calm1205/rest-api`のリポジトリの swagger.json から型を生成

```bash
$ npm run schema-remote
```

<br/><br/>

## [openapi-fetch](https://openapi-ts.pages.dev/openapi-fetch/)

`openapi-typescript`に依存。
`openapi-fetch` は `openapi-typescript`の付属ライブラリ

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| x                   | ○            | ○         | △              |

型付きのクライアント用の fetch 関数を生成する。

middleware を追加することで、リクエストやレスポンスをカスタマイズできる。
middleware 側の設定されできれば一番簡易的にカスタマイズできそう。

<br/><br/>

## [openapi-typescript-fetch](https://github.com/ajaishankar/openapi-typescript-fetch)

`openapi-typescript`に依存。
`openapi-typescript-fetch`は`openapi-typescript`から派生した亜流ライブラリ

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| x                   | ○            | ○         | △              |

`openapi-fetch`が誕生する前から存在している。

<br/><br/>

## [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

`openapi-typescript-codegen`は、型とクライアント用の fetch 関数を生成する

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| x                   | x            | ○         | x              |

<br/><br/>

## [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)

`swagger-typescript-api`は、型とクライアント用の fetch 関数を生成する。

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| x                   | x            | ○         | x              |

クライアント関数と密着した型が生成されるため型の上書きが面倒。

<br/><br/>

## [openapi-generator-cli](https://openapi-generator.tech/)

Java Runtime が必要?そもそも生成できていない。

| 特定 API のみの抽出 | 型のみの抽出 | Enum 変換 | カスタマイズ性 |
| ------------------- | ------------ | --------- | -------------- |
| -                   | -            | -         | -              |

<br/><br/>

## etc
