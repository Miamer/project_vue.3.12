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

const inputType = (type: string, validation: string) => {
  if (validation) {
    return validation;
  }
  return type == 'input' ? 'string' : type;
};

const emit = defineEmits();

const onInputChange = (event: Event, reference: string) => {
  console.log(`event: ${event} update:${reference}`);
  emit(`update:${reference}`, (event.target as HTMLInputElement).value);
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
    @input="onInputChange($event, props.reference)"
  />
</template>

<style scoped>
</style>
