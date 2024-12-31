<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  type: string;
  key: string;
  label: string;
}>();
</script>

<template>
  <button :type="props.type" :key="props.key">
    {{ props.label }}
  </button>
</template>

<style scoped>
</style>
