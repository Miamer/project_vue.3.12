<script setup lang="ts">
import { defineProps, ref, watch, computed, onMounted } from 'vue';
import { extractFilteredData } from '../services/extractFilteredData.ts';

const props = defineProps({
  dataAll: {
    type: Object,
    required: true,
  },
});

const extractData = ref({});

const updateSplitResult = (data: any) => {
  if (data) {
    const resultatSplitData = extractFilteredData(data.data);
    extractData.value = resultatSplitData;
  }
};

/*onMounted(() => {
  updateSplitResult(props.dataAll);
});*/


watch(
  () => props.dataAll,
  (newVal) => {
    console.log('Nouvelle valeur reçue pour dataAll :', newVal);
    updateSplitResult(newVal);
  },
  {immediate: true},
);

console.log('extractData.value', extractData.value);
/*const htmlData = computed(() => splitResult.value.htmlData);
const componentData = computed(() => splitResult.value.componentData);*/

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
