<template>
  <form class="max-w-sm mx-auto">
    <label :for="selectId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <select :id="selectId"
            v-model="model"
            @change="emitSelectedOption"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option v-for="(option, index) in options" :key="option.value" :value="option.value"
              :selected="isDefaultSelected(index)">
        {{ option.label }}
      </option>
    </select>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

interface Option {
  label: string;
  value: string | number;
}
const model = defineModel()
const props = defineProps<{
  label: string;
  options: Option[];
  selectedDefault?: boolean; // Optional prop for default selection behavior
  place_holder?:string
}>();

const emit = defineEmits(['update:selected']); // Emit the selected value

// If selectedDefault is true, set the first option as default

// Emit selected option when it changes
const emitSelectedOption = () => {
  emit('update:selected', model.value);
};

// Helper function to check if an option should be the default selected
const isDefaultSelected = (index: number) => {
  return props.selectedDefault && index === 0;
};

// Watch for changes in model and emit the value
watch(()=>model.value, () => {
  emitSelectedOption();
});

// Generate a unique ID for the select box
const selectId = ref(`select-${Math.random().toString(36).substring(7)}`);
</script>
