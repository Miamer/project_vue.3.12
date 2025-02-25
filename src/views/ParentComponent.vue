<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import DynamicRender from '@/components/DynamicRender.vue';
import DynamicForm from '@/components/DynamicForm.vue';
import { extractFilteredData } from '../utils/extractFilteredData.ts';
import type { DomStructure } from '../shared/type.ts';
import { mergeValueWithDomStructure } from '@/utils/mergeValueAndDomStructureForm.ts';
import { transformKeyToReference } from '@/utils/transformKeyToReference.ts';
import { useRoute } from 'vue-router';

const route = useRoute();

const jsonData = ref<any>(null);
const titleData = ref<string>('');


const domStructureRender = ref({});
const domStructureAndValueForm = ref<DomStructure[]>([{}]);

const loadData = async (jsonFile: string) => {
  try {
    const response = await fetch(`/data/${jsonFile}.json`);  // URL de votre fichier JSON
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
};

onMounted(() => {
  loadData(route.params.jsonFile as string);
});

const initData = (data: any) => {
  if (data) {
    /*Structure render*/
    const {buildStructureRender} = extractFilteredData(data.data);
    domStructureRender.value = buildStructureRender;

    /*Structure and value form*/
    const domStructureForm = jsonData.value.form.components.reverse();
    const {buildDataComponent} = extractFilteredData(data.data);

    const domStructureAndDataForm = mergeValueWithDomStructure(buildDataComponent, domStructureForm);
    const domAndDataFormWithReference = transformKeyToReference(domStructureAndDataForm);

    domStructureAndValueForm.value = domAndDataFormWithReference;

    console.log('domStructureAndValueForm.value', domStructureAndValueForm.value);
  }
};


/*exo:
1- ce que je dois essayé de faire maintenant est de remonter les modification dans domStructureAndValue
2- pour les component input qui n'aurait pas de value je peux les lié
 */

watch(
  jsonData,
  (newVal) => {
    initData(newVal);
  },
  {immediate: true},
);

watch(() => route.params.jsonFile, (newFile) => {
  if (newFile) loadData(newFile as string);
});

onMounted(async () => {
  if (jsonData.value) {
    initData(jsonData.value);
  }
});
</script>

<template>
  <div>
    <h2>Render</h2>
    <h3>Data of {{ titleData }}</h3>
    <div v-if="jsonData">
      <DynamicRender :domStructureRender="domStructureRender"/>
      <h2>Form</h2>
      <DynamicForm :domStructureAndValueForm="domStructureAndValueForm"/>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>

  </div>
</template>

<style scoped>
</style>
