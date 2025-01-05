<script setup lang="ts">
import { defineProps, ref, watch, onMounted, nextTick } from 'vue';
import { createHTMLStructure } from '@/services/createHTMLStructure.ts';

const props = defineProps({
  domStructureRender: {
    type: Object,
    required: true,
  },
});

const dataHtmlRender = ref<HTMLElement | null>(null);

const transformJSONInHTMLStructure = async (data: any) => {
  if (data) {
    await nextTick();

    if (dataHtmlRender.value) {
      dataHtmlRender.value.innerHTML = '';
      createHTMLStructure(props.domStructureRender, dataHtmlRender.value);
    }
  }
};

watch(
  () => props.domStructureRender,
  (newVal) => {
    transformJSONInHTMLStructure(newVal);
  },
  {immediate: true},
);


onMounted(async () => {
  await nextTick();  // vérifie que le DOM est bien monté voir https://fr.vuejs.org/api/general.html#nexttick

  if (props.domStructureRender) {
    await transformJSONInHTMLStructure(props.domStructureRender);
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
