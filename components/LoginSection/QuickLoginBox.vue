<template>
  <div class=" md:mx-0 bg-white rounded-3xl flex flex-col justify-center items-center md:hover:border-4 md:hover:border-green-500 border-4 border-transparent">
    <span class="py-5 px-4 text-center font-bold text-[20px]">{{ props.title }}</span>
    <div class="flex flex-col gap-14">
      <div class="flex flex-col mx-10 items-end">
        <label v-text="'ایمیل'" />
        <input class="border-2 border-green-400 focus:border-green-700 rounded-xl w-[280px] h-[48px] px-3">
      </div>
      <div class="flex flex-col mx-10 items-end">
        <label v-text="'شماره موبایل'"/>
        <input class="border-2 border-green-400 focus:border-green-700 rounded-xl w-[280px] h-[48px] px-3">
      </div>
      <button class="bg-[#58bc82] md:hover:bg-[#04644b] font-bold w-[280px] h-[48px] text-white text-[20px] rounded-xl mb-5 mx-10 mt-3">
        {{props.title_button}}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IPropsCard {
  title: string
  title_button:string
}

const props = withDefaults(defineProps<IPropsCard>(), {})
</script>