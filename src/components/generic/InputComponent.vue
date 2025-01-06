<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';

const props = withDefaults(defineProps<{
      type: string;
      reference?: string;
      label: string;
      disabled: boolean;
      validation: string;
      required: boolean;
      value?: string | number;
    }>(),
{
  type: 'input',
  label: 'label',
  disabled: false,
  validation: '',
  required: false,

});

const emit = defineEmits();

const inputType = (type: string, validation: string) => {
  if (validation) {
    return validation;
  }
  return type == 'input' ? 'string' : type;
};


const onInputChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  emit('update:value', inputElement.value, props.type);
};
</script>

<template>
  <input
    :type="inputType(props.type, props.validation)"
    :reference="props.reference"
    :label="props.label"
    :disabled="props.disabled"
    :required="props.required"
    :value="props.value"
    @input="onInputChange($event)"

  />
</template>

<style scoped>
</style>
