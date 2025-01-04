<script setup lang="ts">
import { defineProps, ref, watch, computed, onMounted, nextTick } from 'vue';
import { extractFilteredData } from '../services/extractFilteredData.ts';
import { createHTMLStructure } from '@/services/createHTMLStructure.ts';

const props = defineProps({
  dataAll: {
    type: Object,
    required: true,
  },
});

const extractData = ref({});
const dataHtmlRender = ref<HTMLElement | null>(null);

const transformJSONInHTMLStructure = async (data: any) => {
  if (data) {
    const resultatSplitData = extractFilteredData(data.data);
    extractData.value = resultatSplitData;

    await nextTick();

    if (dataHtmlRender.value) {

      dataHtmlRender.value.innerHTML = '';
      createHTMLStructure(resultatSplitData, dataHtmlRender.value);
    }
  }
};

watch(
  () => props.dataAll,
  (newVal) => {
    transformJSONInHTMLStructure(newVal);
  },
  {immediate: true},
);


// Action lors du montage
onMounted(async () => {

  // verifie que le DOM est bien monté voir https://fr.vuejs.org/api/general.html#nexttick
  await nextTick();
  if (props.dataAll) {
    transformJSONInHTMLStructure(props.dataAll);
  }
});
</script>

<template>
  <div ref="container">
    <h3>Données séparées</h3>
    <div>
      <h4>HTML Data</h4>
      <pre>{{ extractData }}</pre>
    </div>
    <div>
      <h4>Component Data</h4>
      <div ref="dataHtmlRender"></div>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-left: 10px;
}

ul {
  padding-left: 20px;
}

[data-ref] {
  font-style: italic;
  color: gray;
}
</style>
