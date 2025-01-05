<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

import type { DomStructure } from '../shared/type.ts';

const props = defineProps({
  domStructureAndValueForm: {
    type: Array as PropType<DomStructure[]>,
    required: true,
  },
});
</script>

<template>
  <div v-for="component in props.domStructureAndValueForm" :key="component.reference">
    <div>{{ component.label }}</div>
    <component
      :is="resolveComponent(component.type)"
      :type="component.type"
      :reference="component.reference"
      :label="component.label"
      :disabled="component.disabled"
      :validation="component.validation"
      :required="component.required"
      :value="component.value"
      :options="component.options"
    />
  </div>
</template>

<script lang="ts">
import InputComponent from '@/components/InputComponent.vue';
import SaveButton from '@/components/SaveButton.vue';
import ListComponent from '@/components/ListComponent.vue';
import PersonComponent from '@/components/PersonComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';

function resolveComponent(type) {
  switch (type) {
  case 'button':
    return SaveButton;
  case 'select':
    return SelectComponent;
  case 'input':
  case 'date':
    return InputComponent;
  case 'list':
    return ListComponent;
  case 'person':
    return PersonComponent;
  default:
    throw new Error(`Unknown component type: ${type}`);
  }
}
</script>

<style scoped>
</style>
