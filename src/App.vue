<script setup lang="ts">
import { articleApi as openapiTypescript } from "~/api/openapi-typescript/article";
import { articleApi as openapiFetch } from "~/api/openapi-fetch/article";
import { articleApi as openapiTypescriptFetch } from "~/api/openapi-typescript-fetch/article";
import { articleApi as openapiTypescriptCodegen } from "~/api/openapi-typescript-codegen/api";
import { articleApi as swaggerTypescriptApi } from "~/api/swagger-typescript-api/article";
</script>

<template>
  <section class="wrapper">
    <div class="api">
      <h2>openapi-typescript</h2>
      <button @click="openapiTypescript.getAll">getAll</button>
      <button @click="openapiTypescript.getOne(1)">getOne</button>
      <button @click="openapiTypescript.getOne(99)">getOne fail</button>
    </div>

    <div class="api">
      <h2>openapi-fetch</h2>
      <button @click="openapiFetch.getAll">getAll</button>
      <button @click="openapiFetch.getOne(1)">getOne</button>
    </div>

    <div class="api">
      <h2>openapi-typescript-fetch</h2>
      <button @click="openapiTypescriptFetch.getAll()">getAll</button>
      <button @click="openapiTypescriptFetch.getOne(1)">getOne</button>
    </div>

    <div class="api">
      <h2>openapi-typescript-codegen</h2>
      <button @click="openapiTypescriptCodegen.getAll">getAll</button>
    </div>

    <div class="api">
      <h2>swagger-typescript-api</h2>
      <button @click="swaggerTypescriptApi.getAll">getAll</button>
      <button @click="swaggerTypescriptApi.getOne(1)">getOne</button>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 60px;
}

.api {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
