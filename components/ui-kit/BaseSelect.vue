<template>
  <div class="flex flex-col items-start w-full justify-center gap-2">
    <label :for="selectId">{{ props.label }}</label>
    <Select
        v-model="model"
        :options="dynamicOptions"
        :optionLabel="props.labelName"
        :optionValue="props.valueName"
    :class="['w-full', { 'md:w-56': !fullWidth }]"
    :id="selectId"
    />
  </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';
const { getUrl, fetchData } = useHelpers();

interface Option {
  label: string;
  value: string | number;
}
interface IProps {
  url?: string;
  options?: Option[];
  placeholder?: string;
  fullWidth?: boolean;
  label?: string;
  itemName?: string;
  labelName?: string;
  valueName?: string;
}
const props = withDefaults(defineProps<IProps>(),{
  labelName: 'label',
  valueName: 'value',
})

const model = defineModel(); // به عنوان model استفاده می‌شود
const dynamicOptions = ref<Option[]>([]);
const selectId = ref(`select-${Math.random().toString(36).substring(7)}`);

const loadOptions = async () => {
  if (props.url) {
    const url = getUrl(props.url);
    const { status, message, data } = await fetchData({
      url,
      method: 'GET',
    });
    if (status === 200) {
      dynamicOptions.value = data?.[props?.itemName]?.map((item: any) => ({
        [props.labelName || 'label']: item[props?.labelName || 'name'],
        [props.valueName || 'value']: item[props?.valueName || 'id']
      })) || [];
    }
  } else {
    dynamicOptions.value = props.options || [];
  }
};

onMounted(() => {
  loadOptions();
});
</script>

<style scoped>
/* Optional custom styles */
</style>
