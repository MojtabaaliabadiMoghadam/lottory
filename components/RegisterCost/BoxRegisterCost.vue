<template>
  <div class="flex gap-14 flex-col w-[360px] border border-theme-primary-500 rounded-2xl">
    <div class="bg-theme-primary-500 p-[20px] text-center rounded-t-xl py-8 relative">
      <span class="text-white font-bold text-[20px]">{{props.data_card.title}}</span>
      <span
          class="mdi mdi-triangle-down text-theme-primary-500 mdi-24px absolute top-[84px] right-[166px]"></span>
    </div>
    <div class="flex items-center justify-center">
      <div class="rounded-3xl bg-theme-primary-50 border border-2 border-dashed border-theme-primary-700">
        <span
            :class="props.data_card.icon"
            class="mdi mdi-48px text-theme-primary-800 px-3"></span>
      </div>
    </div>
    <div class="flex flex-col gap-3 items-center justify-center mb-10">
      <span v-for="data in props?.data_card?.data_bottom" class="text-theme-primary-950 font-bold">{{data.text}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IItemData {
  title:string;
  icon:string;
  data_bottom:[]
}
interface IPropsData {
  data_card:IItemData
}
const props = defineProps<IPropsData>()
</script>