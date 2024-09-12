<template>
  <div  class="flex md:flex-row flex-col border-r-8 gap-3 px-6 py-5 bg-white items-center justify-between border border-green-700 rounded-2xl">
    <span class="text-black font-bold text-[22px] px-1">
      {{props.data_notification.title}}
    </span>
    <button class="font-bold bg-green-500 text-nowrap rounded-2xl px-5 h-[57px] text-white text-center hover:bg-[#398439]">
      {{props.data_notification.button_text}}
    </button>
  </div>
</template>
<script setup lang="ts">
interface IInfo{
  title:string;
  button_text:string
}
interface IPropsData {
  data_notification:IInfo
}
const props = defineProps<IPropsData>()
</script>