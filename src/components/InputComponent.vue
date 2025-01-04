<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
      type: string;
      reference: string;
      label: string;
      disabled: boolean;
      validation: string;
      required: boolean;
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

</script>

<template>
  <input
    :type="inputType(props.type, props.validation)"
    :reference="props.reference"
    :label="props.label"
    :disabled="props.disabled"
    :required="props.required"
  />
</template>

<style scoped>
</style>
