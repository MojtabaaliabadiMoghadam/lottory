<template>
  <div class="flex flex-col items-start">
    <label v-if="props.label"  v-text="props.label"/>
    <input v-model="model" :type="props.type" :placeholder="props.placeHolder" class="border-2 border-theme-primary-400 focus:border-theme-primary-700 rounded-xl w-[280px] h-[48px] px-3"
       :class="[props.classInput]"
    >
  </div>
</template>
<script setup lang="ts">
interface IPropsData {
  label?:string;
  classInput?:string;
  placeHolder?:string;
  type?:string
}
const props = withDefaults(defineProps<IPropsData>(),{
  type:'text'
})
const model = defineModel()
</script>