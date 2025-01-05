<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import DynamicRender from '@/components/DynamicRender.vue';
import DynamicForm from '@/components/DynamicForm.vue';
import { extractFilteredData } from '../utils/extractFilteredData.ts';
import type { DomStructure } from '../shared/type.ts';
import { mergeValueWithDomStructure } from '@/utils/mergeValueAndDomStructureForm.ts';


const jsonData = ref<any>(null);
const titleData = ref<string>('');


const domStructureRender = ref({});
const domStructureAndValueForm = ref<DomStructure[]>([{}]);


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

const initData = (data: any) => {
  if (data) {
    /*Structre*/
    const {buildStructureRender} = extractFilteredData(data.data);
    domStructureRender.value = buildStructureRender;
    const domStructureForm = jsonData.value.form.components.reverse();


    const {buildDataComponent} = extractFilteredData(data.data);

    const domStructureAndDataForm = mergeValueWithDomStructure(buildDataComponent, domStructureForm);
    domStructureAndValueForm.value = domStructureAndDataForm;

    console.log('domStructureAndDataForm', domStructureAndDataForm);
  }
};

/*const updateValue = (keyObject: string, newValue: string) => {
  pureDataForm.value[keyObject] = newValue;
};*/

watch(
  jsonData,
  (newVal) => {
    initData(newVal);
  },
  {immediate: true},
);

onMounted(async () => {
  if (jsonData.value) {
    initData(jsonData.value);
  }
});
</script>

<template>
  <div>
    <h1>First Page of json 1</h1>
    <h2>Data of {{ titleData }}</h2>
    <div v-if="jsonData">
      <DynamicRender :domStructureRender="domStructureRender"/>
      <DynamicForm :domStructureAndValueForm="domStructureAndValueForm"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>

  </div>
</template>

<style scoped>
</style>
