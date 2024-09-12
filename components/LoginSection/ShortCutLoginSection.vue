<template>
  <div  class="flex flex-col md:flex-row gap-5">
    <div v-for="(shortcut , index) in props.data_shortcuts" :key="index"
         class="hover:border-green-500 hover:border-2 border-2 border-transparent bg-white flex gap-3 px-3 py-2 rounded-xl justify-between cursor-pointer w-[290px]">
       <span class=" rounded-full flex justify-center items-center h-[50px] w-[50px]"
             :class="{
        'bg-green-600':shortcut.bg === 'green',
        'bg-red-600':shortcut.bg === 'red',
        'bg-purple-600':shortcut.bg === 'purple',
      }"
       >
       <span class="mdi  text-white mdi-24px"
             :class="shortcut.icon"
       ></span>
      </span>
      <div class="flex flex-col text-center font-bold pt-2 select-none">
        <span class="text-green-950 text-nowrap">{{shortcut.title}}</span>
        <span class="text-gray-500 text-nowrap">{{shortcut.description}}</span>
      </div>
      <span class=" flex mdi mdi-arrow-left-thin text-green-600 mdi-36px"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  data_shortcuts:Array
}
const props = defineProps<IProps>()
</script>