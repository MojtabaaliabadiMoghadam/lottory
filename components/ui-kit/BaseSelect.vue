<template>
  <div class="flex flex-col items-start w-full justify-center gap-2">
    <label class="" :for="selectId">{{props.label}}</label>
    <Select
        v-model="model"
        :options="dynamicOptions"
        optionLabel="label"
        :class="['w-full', { 'md:w-56': !fullWidth }]"
        :id="selectId"
        @change="emitSelectedOption"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onMounted } from 'vue';
import Select from 'primevue/select';
const {getUrl,fetchData} = useHelpers()
interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  url?: string; // URL for fetching options
  options?: Option[]; // Static options
  placeholder?: string; // Placeholder text
  fullWidth?: boolean; // Optionally make select box full width
  label?:string;
  itemName?:string
  labelName?:string
  valueName?:string
}>();

const emit = defineEmits(['update:selected']);

// Data properties
const model = ref(null);
const dynamicOptions = ref<Option[]|any>([]);
const selectId = ref(`select-${Math.random().toString(36).substring(7)}`);

// Load data from URL or use static options
const loadOptions = async () => {
  if (props.url) {
    const url = getUrl(props.url);
    const { status, message, data } = await fetchData({
      url,
      method: 'GET',
    });
    if (status === 200) {
      // Optional chaining (?.) to safely access data[props.itemName]
      dynamicOptions.value = data?.[props?.itemName]?.map((item: any) => ({
        label: item[props?.labelName || 'name'],
        value: item[props?.valueName || 'id'],
      })) || [];
      console.log(dynamicOptions.value,'***************')
    }
  }else{
    dynamicOptions.value = props.options
  }
}
// Emit selected value
const emitSelectedOption = () => {
  emit('update:selected', model.value);
};

// Load options when the component is mounted
onMounted(() => {
  loadOptions();
});

// Watch for changes in the model and emit the selected value
watch(() => model.value, () => {
  emitSelectedOption();
});
</script>

<style scoped>
/* Optionally, add custom styles here */
</style>
