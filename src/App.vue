<script setup lang="ts">
import { login } from "~/libs/clm/login";
import { hello } from "~/libs/clm/hello";
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
~/libs/clm/hello~/libs/clm/login
