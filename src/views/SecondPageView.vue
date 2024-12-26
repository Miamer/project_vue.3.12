<script setup lang="ts">

defineProps<{
  message: string

}>();

</script>

<template>
  <div>
    <p> Je suis dans second page</p>
    <p> Je passe un props message : {{ message }}</p>
  </div>
</template>

<style scoped>
</style>
