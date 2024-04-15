# openapi2typescript

todo: snake_case -> camelCase に変換

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

はずだが、`openapi-fetch`のドキュメント通りに実装するものの、型が合わないエラーが発生する。

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
| ?                   | ?            | ○         | ?              |

<br/><br/>

## etc
