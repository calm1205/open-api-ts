<script setup lang="ts">
import { articleApi } from "~/api/customAxios/article";
</script>

<template>
  <section class="wrapper">
    <button @click="articleApi.getAll()">getAll</button>
    <button @click="articleApi.getOne(1)">getOne</button>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
