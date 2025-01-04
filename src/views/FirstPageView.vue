<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DynamicDataRender from '@/components/DynamicDataRender.vue';

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
    ;
    console.error('Erreur:', error);
  }
});
</script>

<template>
  <div>
    Je suis sur FirstPage
    <div v-if="jsonData">
      <DynamicDataRender :dataAll="jsonData"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>
  </div>
</template>

<style scoped>
</style>
