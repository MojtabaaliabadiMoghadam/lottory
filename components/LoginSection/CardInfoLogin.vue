<template>
  <div class="md:mx-0 bg-white rounded-3xl flex flex-col justify-between items-center md:hover:border-4 transition-all duration-150 ease-in
   md:hover:border-theme-primary-500 border-4 border-transparent">
    <span class="py-5 font-bold text-[20px]">{{ props.title }}</span>
      <div v-for="( card_data , index) in props.data" :key="index" class="flex w-full items-center gap-1 justify-start px-3">
        <span class="mdi mdi-24px mdi-checkbox-outline" />
        <span class="">
        {{ card_data.data }}
        </span>
      </div>
      <div class="py-4">
        <ui-kit-base-button
            :disabled="disableButton"
            class-button="h-[20px] w-[150px]"
            :label="props.title_button"
        />
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