<template>
    <button @click="$emit('click-on')"
            class="rounded-xl md:py-4 py-2 md:px-10 px-5 transition-all duration-200 ease-in text-nowrap
            text-center flex items-center justify-center"
            :class="[props.classButton,props.active ? active_button[props.theme] :'',theme_button[props.theme]]"
    >
      <slot v-if="$slots.before_label" name="before_label"/>
      {{props.label}}
      <slot v-if="$slots.after_label" name="after_label"/>
    </button>
</template>
<script setup lang="ts">
interface IPropsData{
  label?:string;
  classButton?:string;
  active?:boolean;
  theme?:'theme_primary'|'theme_secondary'
}
const props = withDefaults(defineProps<IPropsData>(),{
  theme:'theme_primary'
})
const emit = defineEmits(['click-on'])
const theme_button = {
  theme_primary:'bg-theme-primary-100 text-theme-primary-950 hover:bg-theme-primary-700 hover:text-white font-bold',
  theme_secondary:'bg-white text-theme-primary-950 ring-2 ring-theme-primary-700 hover:bg-theme-primary-700 hover:text-black hover:font-bold hover:ring-4',
}
const active_button = {
  theme_primary:'!bg-theme-primary-900 !text-white',
  theme_secondary:'!bg-theme-primary-700 !text-black font-bold ring-4'
}
</script>