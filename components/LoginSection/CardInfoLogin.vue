<template>
  <div class="md:mx-0 bg-white rounded-3xl flex flex-col justify-center items-center md:hover:border-4 transition-all duration-150 ease-in
   md:hover:border-theme-primary-500 border-4 border-transparent">
    <span class="py-5 font-bold text-[20px]">{{ props.title }}</span>
    <div class="flex flex-col">
      <div v-for="( card_data , index) in props.data" :key="index" class="flex items-center gap-1 justify-start px-3">
        <span class="mdi mdi-24px mdi-checkbox-outline" />
        <span class="">
        {{ card_data.data }}
        </span>
      </div>
      <button :disabled="disableButton"
              class="bg-theme-primary-500 disabled:bg-theme-primary-100 font-bold w-[280px]
               h-[48px] text-white text-[20px] rounded-xl mb-5 mx-10 mt-3"
              :class="[disableButton ? 'cursor-not-allowed': 'md:hover:bg-theme-primary-700']"
      >
        {{props.title_button}}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IPropsCard {
  data: any
  title: string
  title_button:string
  disableButton?:boolean
}

const props = withDefaults(defineProps<IPropsCard>(), {
  disableButton:false
})
</script>