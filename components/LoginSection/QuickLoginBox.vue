<template>
  <div class=" md:mx-0 bg-white rounded-3xl flex flex-col justify-center items-center md:hover:border-4
   transition-all ease-in duration-150 md:hover:border-theme-primary-500 border-4 border-transparent">
    <span class="py-3 px-8 text-center font-bold text-[20px]">{{ props.title }}</span>
    <div class="flex flex-col gap-14 items-center justify-center">
      <div class="w-full flex items-center justify-center">
        <ui-kit-input label="ایمیل:" class-input="w-72"/>
      </div>
      <ui-kit-input label="شماره موبایل:" class-input="w-72"/>
      <button class="bg-theme-primary-500 md:hover:border-theme-primary-700 font-bold w-[280px] text-center h-[48px] text-white text-[20px] rounded-xl mb-5 mx-10 mt-3">
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