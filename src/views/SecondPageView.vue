<script setup lang="ts">

defineProps<{
  message: string
}>();


import { onMounted, ref } from 'vue';

const jsonData = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('src/data/json1.json'); // URL de votre fichier JSON
    if (!response.ok) {
      throw new Error('Error data fetch JSON');
    }
    const data = await response.json();
    jsonData.value = data;
  } catch (error) {
    console.error('Erreur:', error);
  }
});


</script>

<template>
  <div>
    <p> Je suis dans second page</p>
    <p> Je passe un props message : {{ message }}</p>
  </div>
</template>

<style scoped>
</style>
