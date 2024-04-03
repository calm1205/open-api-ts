<script setup lang="ts">
import { ref } from "vue";

import { login } from "~/libs/login";
import { loginOld } from "~/libs/loginOld";
import { client } from "~/libs/api";

const myName = ref();
const getMe = async () => {
  const response = await client.GET("/v2/user/me");
  console.log(response);
  // myName.value = response;
};
</script>

<template>
  <section class="wrapper">
    <button @click="loginOld">login old</button>
    <button @click="login">login</button>
    <button @click="getMe">me</button>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
