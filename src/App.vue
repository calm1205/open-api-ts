<script setup lang="ts">
import { customAxios } from "~/api/customAxios/customAxios";

const getAll = async () => {
  const response = customAxios({
    methods: "get",
    endpoint: "/v1/articles",
  });
  console.log(response);
};
</script>

<template>
  <section class="wrapper">
    <button @click="getAll">hello</button>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
