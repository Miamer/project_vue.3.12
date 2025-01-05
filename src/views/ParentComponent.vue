<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import DynamicRender from '@/components/DynamicRender.vue';
import DynamicForm from '@/components/DynamicForm.vue';
import { extractFilteredData } from '@/services/extractFilteredData.ts';


const jsonData = ref<any>(null);
const titleData = ref<string>('');

onMounted(async () => {
  try {
    const response = await fetch('src/data/json1.json'); // URL de votre fichier JSON
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


const pureData = ref({});

const domStructureRender = ref({});
const domStructureForm = ref({});


const extractData = (data: any) => {
  if (data) {
    const {buildDataRender} = extractFilteredData(data.data);
    const {buildDataComponent} = extractFilteredData(data.data);

    domStructureRender.value = buildDataRender;

    console.log('jsonData.value.form.components', jsonData.value.form.components);
    domStructureForm.value = jsonData.value.form.components;

    /*    domStructureForm.value = buildDataComponent;*/

  }
};

watch(
  jsonData,
  (newVal) => {
    extractData(newVal);
    console.log('domStructureRender.value', domStructureRender.value);
    console.log('domStructureForm.value', domStructureForm.value);
  },
  {immediate: true},
);

onMounted(async () => {
  if (jsonData.value) {
    extractData(jsonData.value);
  }
});


</script>

<template>
  <div>
    <h1>First Page of json 1</h1>
    <h2>Data of {{ titleData }}</h2>
    <div v-if="jsonData">
      <DynamicRender :domStructureRender="domStructureRender"/>
      <DynamicForm :domStructureForm="domStructureForm"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>

  </div>
</template>

<style scoped>
</style>
