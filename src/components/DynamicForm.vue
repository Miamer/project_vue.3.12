<script setup lang="ts">
import { defineProps, ref, computed, watch, onMounted } from 'vue';
import type { PropType } from 'vue';

import type { DomStructure } from '../shared/type.ts';

const props = defineProps({
  domStructureAndValueForm: {
    type: Array as PropType<DomStructure[]>,
    required: false,
  },
});

const formValues = ref<Record<string, string | number | null>>(
  Object.fromEntries(
    props.domStructureAndValueForm
      .filter((field) => ['date', 'input', 'select'].includes(field.type))
      .map((field) => [field.reference, field.value || null]),
  ),
);

const isFormValid = computed(() => {
  return Object.values(formValues.value).every(value => value !== '' && value !== null);
});

function updateFieldValue(reference: string, value: string | number | null, type: string) {
  console.log(`ref: ${reference} value: ${value}`);
  formValues.value = {...formValues.value, [reference]: value};
}

function getComponentType(index: number, type: string, value: any): string {
  if (index === props.domStructureAndValueForm.length - 1 && !value) {
    return 'submit';
  }

  return type;
}


watch(formValues, (newValue) => {
  console.log('formValues a changé', newValue);
  console.log('isFormValid:', isFormValid.value);
});

onMounted(() => {
  console.log('isFormValid:', isFormValid.value);
});


</script>

<template>

  <div v-for="(component, index) in props.domStructureAndValueForm" :key="component.reference">

    <component
      class="generic-component"
      :is="resolveComponent(
        component.type,
        index,
        props.domStructureAndValueForm.length,
        component.value
      )"
      :type="getComponentType(index, component.type, component.value)"
      :reference="component.reference"
      :label="component.label"
      :disabled="component.type === 'submit' ? !isFormValid.value : component.disabled"
      :validation="component.validation"
      :required="component.required"
      :value="component.value"
      :options="component.options"
      @update:value="updateFieldValue(component.reference, $event, component.type)"
    />


  </div>
</template>

<script lang="ts">
import InputComponent from '@/components/generic/InputComponent.vue';
import SaveButton from '@/components/generic/ButtonComponent.vue';
import ListComponent from '@/components/generic/ListComponent.vue';
import PersonComponent from '@/components/generic/PersonComponent.vue';
import SelectComponent from '@/components/generic/SelectComponent.vue';
import SubmitButton from '@/components/generic/SubmitButton.vue';

function resolveComponent(type: string, index: number, componentsLength: number, componentValue?: string | number) {

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
  case 'submit':
    return SubmitButton;
  default:
    throw new Error(`Unknown component type: ${type}`);
  }
}
</script>

<style scoped>
.generic-component {
  margin-bottom: 15px;
}
</style>
