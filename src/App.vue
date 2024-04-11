<script setup lang="ts">
import { ref } from "vue";

import { articleApi } from "~/api/openapi-typescript/article";

const response = ref();

const getAll = async () => {
  const data = await articleApi.getAll();
  response.value = JSON.stringify(data, null, 2);
};
const getOne = async (id: number) => {
  const data = await articleApi.getOne(id);
  response.value = JSON.stringify(data, null, 2);
};
const create = async () => {
  const data = await articleApi.create();
  response.value = JSON.stringify(data, null, 2);
};

const deleteArticle = async () => {
  const data = await articleApi.delete();
  response.value = JSON.stringify(data, null, 2);
};
</script>

<template>
  <section class="wrapper">
    <section class="api">
      <button @click="getAll">getAll</button>
      <button @click="getOne(1)">getOne</button>
      <button @click="create">create</button>
      <button @click="deleteArticle">delete</button>
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
  width: 20%;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 20px;
}

.response {
  width: 80%;
  padding: 40px 20px;
  overflow-y: scroll;
}
</style>
