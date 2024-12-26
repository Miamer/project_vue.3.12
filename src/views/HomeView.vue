<script setup lang="ts">
import { ref } from 'vue';

const message = ref('My message');
const emit = defineEmits(['message:change']);

const onChangeMessage = (event :any) => {
  message.value = event.target.value;

  const payload = {
    message: message.value,
  };
  emit('message:change', payload);
};

</script>

<template>
  <main>
    Nous sommes dans la Home. Choisi un message a transmettre dans la secondPage:

    <input :value="message" @change="onChangeMessage" />
  </main>
</template>
