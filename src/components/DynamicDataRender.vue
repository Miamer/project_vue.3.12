<script setup lang="ts">
import { defineProps, ref, watch, onMounted, nextTick } from 'vue';
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
    const domData = extractFilteredData(data.data);
    extractData.value = domData;

    await nextTick();

    if (dataHtmlRender.value) {

      dataHtmlRender.value.innerHTML = '';
      createHTMLStructure(domData, dataHtmlRender.value);
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


onMounted(async () => {
  await nextTick();  // verifie que le DOM est bien monté voir https://fr.vuejs.org/api/general.html#nexttick

  if (props.dataAll) {
    transformJSONInHTMLStructure(props.dataAll);
  }
});

</script>

<template>
  <div ref="container">
    <div ref="dataHtmlRender"></div>
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
