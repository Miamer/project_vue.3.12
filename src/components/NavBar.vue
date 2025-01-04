<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

defineProps<{}>();

</script>

<template>
  <nav>
    <RouterLink to="/"><h1>Home</h1></RouterLink>
    <RouterLink to="/firstPage"><h1>Json1</h1></RouterLink>
    <RouterLink to="/secondPage"><h1>Json2</h1></RouterLink>
    <RouterLink to="/thirdPage"><h1>Json3</h1></RouterLink>
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
