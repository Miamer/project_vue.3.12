<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const formData = computed(() => {
  console.log('props.form.data', props.form.data);

  if (props.form?.data) {
    const processedData = initFormData(props.form.data);
    console.log('Computed formData:', processedData);
    return processedData;
  }

  return {};
});

function initFormData(data) {
  const result = {};

  function flattenObject(obj, parentKey = '') {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const currentKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        flattenObject(value, currentKey);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          flattenObject(item, `${currentKey}[${index}]`);
        });
      } else {
        result[currentKey] = value;
      }
    });
  }

  flattenObject(data);
  return result;
}
</script>

<template>
  <div>
    <h3>Formulaire Dynamique</h3>
    <div v-for="(value, key) in formData" :key="key" class="form-group">
      <label :for="key">{{ key }}</label>
      <div>
        <input
          v-if="typeof value === 'string'"
          v-model="formData[key]"
          type="text"
          :id="key"
          :placeholder="key"
        />
        <input
          v-if="typeof value === 'number'"
          v-model="formData[key]"
          type="number"
          :id="key"
          :placeholder="key"
        />
      </div>
      <p v-if="typeof value !== 'string' && typeof value !== 'number'">
        (Non modifiable : {{ value }})
      </p>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
