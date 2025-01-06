<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';

const props = withDefaults(defineProps<{
  type: string;
  reference: string;
  label: string;
  disabled: boolean;
  options: {
    items: { value: string | number; label: string }[];
  };
  value?: string | number;
}>(), {
  type: 'select',
  label: 'Select',
  disabled: false,
  options: {items: []},
});

const emit = defineEmits();

const onValueChange = (event: Event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  emit(`update:${props.reference}`, selectedValue);
};
</script>

<template>
  <div>
    <label :for="props.reference" v-if="props.label">{{ props.label }}</label>
    <select
      :id="props.reference"
      :disabled="props.disabled"
      :value="props.value"
      @change="onValueChange"
    >
      <option v-for="item in props.options.items" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
</style>