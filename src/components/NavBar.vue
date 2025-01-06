<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

defineProps<{}>();

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'page', params: { jsonFile: 'json1' } }">JSON 1</router-link>
    <router-link :to="{ name: 'page', params: { jsonFile: 'json2' } }">JSON 2</router-link>
    <router-link :to="{ name: 'page', params: { jsonFile: 'json3' } }">JSON 3</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav a:visited {
  color: white;
}

</style>
