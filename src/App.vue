<script setup lang="ts">
import { ref } from "vue";

import { articleApi } from "~/api/openapi-typescript/article";
import { articleApi as articleApi2 } from "~/api/openapi-typescript-fetch/article";
import { articleApi as articleApi3 } from "~/api/openapi-typescript-codegen/api";

const response = ref();

const openapiTypescript = {
  getAll: async () => {
    const data = await articleApi.getAll();
    response.value = JSON.stringify(data, null, 2);
  },
  getOne: async (id: number) => {
    const data = await articleApi.getOne(id);
    response.value = JSON.stringify(data, null, 2);
  },
};

const openapiTypescriptFetch = {
  getAll: async () => {
    const { data } = await articleApi2.getAll({});
    response.value = JSON.stringify(data, null, 2);
  },
  getOne: async (id: number) => {
    const { data } = await articleApi2.getOne({ id });
    response.value = JSON.stringify(data, null, 2);
  },
};

const openapiTypescriptCodegen = {
  getAll: async () => {
    const data = await articleApi3.getAll();
    response.value = JSON.stringify(data, null, 2);
  },
};
</script>

<template>
  <section class="wrapper">
    <section class="api">
      <div class="api-item">
        <h2>openapi-typescript</h2>
        <button @click="openapiTypescript.getAll">getAll</button>
        <button @click="openapiTypescript.getOne(1)">getOne</button>
      </div>

      <div class="api-item">
        <h2>openapi-typescript-fetch</h2>
        <button @click="openapiTypescriptFetch.getAll">getAll</button>
        <button @click="openapiTypescriptFetch.getOne(1)">getOne</button>
      </div>

      <div class="api-item">
        <h2>openapi-typescript-codegen</h2>
        <button @click="openapiTypescriptCodegen.getAll">getAll</button>
      </div>
    </section>

    <section class="response">
      <p v-html="response"></p>
    </section>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
}

.api {
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 60px;

  .api-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.response {
  flex: 1;
  padding: 40px 20px;
  overflow-y: scroll;
}
</style>
