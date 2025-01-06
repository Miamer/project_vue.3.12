<script setup lang="ts">
import { defineProps, watch, withDefaults } from 'vue';

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
  label: 'Submit',
  disabled: true,
});


</script>

<template>
  <button :disabled="props.disabled">
    {{ props.label }}
  </button>
</template>

<style scoped>
</style>
