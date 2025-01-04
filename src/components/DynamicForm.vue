<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue';
import SaveButton from '@/components/SaveButton.vue';


const props = defineProps({
  dataAll: {
    type: Object,
    required: true,
  },
});

console.log('props.dataAll', props.dataAll);
console.log('props.dataAll.form', props.dataAll.form);
console.log('props.dataAll.form.components', props.dataAll.form.components);
console.log('props.dataAll.form.components[0]', props.dataAll.form.components[0]);

const testVariable = props.dataAll.form.components[0].label;
console.log('testVariable ', testVariable);
</script>

<template>
  <SaveButton :label="testVariable"/>
</template>

<style scoped>

</style>