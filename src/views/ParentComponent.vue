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

const dataRender = ref({});
const dataForm = ref({});


const extractData = (data: any) => {
  if (data) {
    const {buildDataRender} = extractFilteredData(data.data);
    const {buildDataComponent} = extractFilteredData(data.data);

    dataRender.value = buildDataRender;
    dataForm.value = buildDataComponent;

  }
};


watch(
  jsonData,
  (newVal) => {
    extractData(newVal);
    console.log('dataRender.value', dataRender.value);
    console.log('dataForm.value', dataForm.value);
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
      <DynamicRender :dataRender="dataRender"/>
      <DynamicForm :dataAll="jsonData"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>

  </div>
</template>

<style scoped>
</style>
