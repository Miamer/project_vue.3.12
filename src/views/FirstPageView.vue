<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DynamicDataRender from '@/components/DynamicDataRender.vue';
import DynamicForm from '@/components/DynamicForm.vue';

const jsonData = ref<any>(null);
const titleData = ref<string>('');

onMounted(async () => {
  try {
    const response = await fetch('src/data/json2.json'); // URL de votre fichier JSON
    if (!response.ok) {
      throw new Error('Error data fetch JSON');
    }
    const data = await response.json();
    jsonData.value = {...data};

    const firstKey = Object.keys(data.data)[0];

    titleData.value = firstKey;

  } catch (error) {
    console.error('Erreur:', error);
  }
});


</script>

<template>
  <div>
    <h1>First Page of json 1</h1>
    <h2>Data of {{ titleData }}</h2>
    <div v-if="jsonData">
      <DynamicDataRender :dataAll="jsonData"/>
      <DynamicForm :dataAll="jsonData"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>

  </div>
</template>

<style scoped>
</style>
