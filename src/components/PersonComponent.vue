<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  type: string;
  reference: string;
  label: string;
  disabled: boolean;
}>(), {
  type: 'person',
  label: 'Person',
  disabled: true,
});
</script>

<template>
  <div class="person-container" :class="{ disabled: props.disabled }">
    <img
      src="https://img.freepik.com/premium-photo/flat-icon-food-isolated-background_1111524-4011.jpg"
      alt="Person"
      class="person-avatar"
    />
    <span class="person-label">{{ props.label }}</span>
  </div>
</template>

<style scoped>
.person-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.person-container.disabled {
  opacity: 0.5;
  pointer-events: none;
  filter: grayscale(100%);
}

.person-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

.person-label {
  font-size: 1rem;
  font-weight: bold;
}
</style>
