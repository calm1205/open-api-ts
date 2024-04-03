<script setup lang="ts">
// import { ref } from "vue";

import { login } from "~/libs/login";
import { client } from "~/libs/api";
import { userApi } from "./libs/meOld";

// const myName = ref();
const getMe = async () => {
  console.log("getMe");
  const response = await client.GET("/v2/user/me");
  console.log(response);
  // myName.value = response;
};

const getMeOld = userApi.me;

const hello = async () => {
  const { data } = await client.GET("/v2/hello");
  console.log(data);
};
</script>

<template>
  <section class="wrapper">
    <button @click="login">login</button>
    <button @click="getMe">me</button>
    <button @click="getMeOld">me old</button>
    <button @click="hello">hello</button>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
