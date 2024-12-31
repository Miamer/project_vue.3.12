<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DynamicForms from '@/components/DynamicDataRender.vue';

const jsonData = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('src/data/json2.json'); // URL de votre fichier JSON
    if (!response.ok) {
      throw new Error('Error data fetch JSON');
    }
    const data = await response.json();
    jsonData.value = data;
    console.log(jsonData.value);
    console.log(jsonData.value.data);
  } catch (error) {
    console.error('Erreur:', error);
  }
});
</script>

<template>
  <div>
    Je suis sur FirstPage
    <div v-if="jsonData">
      <DynamicForms :form="jsonData"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>
  </div>
</template>

<style scoped>
</style>
