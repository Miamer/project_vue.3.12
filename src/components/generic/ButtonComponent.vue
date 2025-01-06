<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
      label: string;
      disabled: boolean;
    }>(),
{
  label: 'Save',
  disabled: false,
});
</script>

<template>
  <button :disabled="props.disabled">
    {{ props.label }}
  </button>
</template>

<style scoped>
</style>
