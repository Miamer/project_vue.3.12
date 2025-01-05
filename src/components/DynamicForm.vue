<script setup lang="ts">

import { defineProps } from 'vue';
import type { PropType } from 'vue';
import InputComponent from '@/components/InputComponent.vue';

type DomStructure = {
  type?: string;
  key?: string;
  reference?: string;
  label?: string;
  disabled?: boolean
  validation?: boolean
  required?: boolean
};

const props = defineProps({
  domStructureForm: {
    type: Array as PropType<DomStructure[]>,
    required: true,
  },
});

console.log('props', props);
</script>


<template>
  <div v-for="component in props.domStructureForm">
    <div>{{ component.type }}.</div>
    <InputComponent
      :type="component.type"
      :reference="component.key"
      :label="component.label"
      :disabled="component.disabled"
      :validation="component.validation"
      :required="component.required"
    />
  </div>
</template>

<style scoped>

</style>