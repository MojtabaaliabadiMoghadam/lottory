<template>
  <div>
    <button @click="$emit('click-on')"
            class="bg-theme-primary-100  rounded-xl md:py-4 text-theme-primary-950 py-2 font-bold md:px-10 px-5
                  hover:bg-theme-primary-700 hover:text-white transition-all duration-200 ease-in"
            :class="[props.classButton,props.active ?'!bg-theme-primary-900 !text-white':'']"
    >
      {{props.label}}
    </button>
  </div>
</template>
<script setup lang="ts">
interface IPropsData{
  label?:string;
  classButton?:string;
  active?:boolean
}
const props = defineProps<IPropsData>()
const emit = defineEmits(['click-on'])
</script>