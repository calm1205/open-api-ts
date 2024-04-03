<script setup lang="ts">
import { login } from "~/libs/login";
import { hello } from "~/libs/hello";
</script>

<template>
  <section class="wrapper">
    <button @click="login">login</button>

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
