<template>
  <div class="flex gap-3 px-4 flex-col py-3 items-start border border-theme-primary-700 rounded-xl relative overflow-hidden">
    <span class="text-black font-bold text-[20px] px-1">
      {{props.data_info.question}}
    </span>
    <span class="font-light text-[18px]">
      {{props.data_info.answer}}
    </span>
    <span class="mdi mdi-square-rounded text-theme-primary-800 mdi-36px absolute -top-[1px] -right-[20px]"></span>
  </div>
</template>
<script setup lang="ts">
interface IInfo{
  question:string;
  answer:string
}
interface IPropsData {
  data_info:IInfo
}
const props = defineProps<IPropsData>()
</script>