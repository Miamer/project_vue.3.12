<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

defineProps<{}>();

</script>

<template>
  <nav>
    <RouterLink to="/"><h1>Home</h1></RouterLink>
    <RouterLink to="/firstPage"><h1>First Page</h1></RouterLink>
    <RouterLink to="/secondPage"><h1>Second Page</h1></RouterLink>
    <RouterLink to="/thirdPage"><h1>Third Page</h1></RouterLink>
  </nav>
</template>

<style scoped>
</style>
