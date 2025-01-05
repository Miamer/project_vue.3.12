<script setup lang="ts">

import { defineProps } from 'vue';
import type { PropType } from 'vue';
import InputComponent from '@/components/InputComponent.vue';
import type { DomStructure } from '../shared/type.ts';


const props = defineProps({
  domStructureAndValueForm: {
    type: Array as PropType<DomStructure[]>,
    required: true,
  },
});

</script>


<template>
  <div v-for="component in props.domStructureAndValueForm">
    <div>{{ component.label }}</div>
    <InputComponent
      :type="component.type"
      :reference="component.key"
      :label="component.label"
      :disabled="component.disabled"
      :validation="component.validation"
      :required="component.required"
      :value="component.value"
    />
  </div>
</template>

<style scoped>

</style>