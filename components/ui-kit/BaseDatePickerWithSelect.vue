<template>
  <div class="w-full flex flex-col gap-1">
    <label class="" for="">{{ props.label }}</label>
    <div class="w-full flex gap-3 items-center">
      <Select v-model="selectedDay" :options="getJalaliOptions('day')" optionLabel="name" placeholder="روز" class="w-1/4" />
      <Select v-model="selectedMonth" :options="getJalaliOptions('month')" optionLabel="name" placeholder="ماه" class="w-2/4" />
      <Select v-model="selectedYear" :options="getJalaliOptions('year')" optionLabel="name" placeholder="سال" class="w-2/4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineModel, watch } from 'vue';
import Select from "primevue/select";
const { getJalaliOptions } = useHelpers();

interface DateProps {
  label?: string;
}

const props = defineProps<DateProps>();

// Define selected date parts as refs
const selectedDay = ref<number | string>('');
const selectedMonth = ref<number | string>('');
const selectedYear = ref<number | string>('');

// Define a model with initial value to avoid null issues
const model = defineModel();

// Watch selected values to update the model
watch([selectedDay, selectedMonth, selectedYear], () => {
  if (selectedDay?.value.id && selectedMonth.value.id && selectedYear.value.id) {
    model.value = `${selectedYear.value.id}-${String(selectedMonth.value.id).padStart(2, '0')}-${String(selectedDay.value.id).padStart(2, '0')}`;
  } else {
    model.value = ''; // Reset to empty string if date is incomplete
  }
});

// Computed property to display the formatted date
const formattedDate = computed(() => model.value);
</script>

<style scoped>
/* Add your custom styles here */
</style>
