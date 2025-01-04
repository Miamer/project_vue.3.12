<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue';
import SaveButton from '@/components/SaveButton.vue';
import InputComponent from '@/components/InputComponent.vue';


const props = defineProps({
  dataAll: {
    type: Object,
    required: true,
  },
});

const testButton = props.dataAll.form.components[0];

const testInput = props.dataAll.form.components[1];

const testInputArray = [
  props.dataAll.form.components[1],
  props.dataAll.form.components[2],
  props.dataAll.form.components[3],
  props.dataAll.form.components[4],
];

console.log('testInputArray', testInputArray);
const reverseComponentForm = props.dataAll.form.components.reverse();

</script>


<template>
  <SaveButton :label="testButton.label" :disabled="testButton.disabled"/>

  <div v-for="component in testInputArray">
    <InputComponent
      :type="component.type"
      :reference="component.key"
      :label="component.label"
      :disabled="component.disabled"
      :validation="component.validation"
      :required="component.required"
    />
  </div>


  <InputComponent
    :type="testInput.type"
    :reference="testInput.key"
    :label="testInput.label"
    :disabled="testInput.disabled"
    :validation="testInput.validation"
    :required="testInput.required"
  />


  <form>
    <label for="car">Choisissez une voiture :</label>
    <select id="car" name="car">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <button type="submit">Envoyer</button>
  </form>

</template>

<style scoped>

</style>