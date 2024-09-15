<template>
  <div style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
       class="flex h-full gap-4 flex-col items-center justify-between cursor-pointer p-4 rounded-2xl hover:bg-green-100 transition-all duration-200 ease-in">
    <div class="">
      <img class="rounded-xl" :src="checkWitchImageShouldShow(props.image)">
    </div>
    <div class="font-bold text-center text-green-600 flex items-start justify-center h-full w-[200px]">
      <span class="text-wrap hover:text-green-600">
        {{props.title}}
      </span>
    </div>
    <div class="font-light flex justify-center w-full">
      {{props.date_added}}
    </div>
  </div>
</template>
<script setup lang="ts">
import {useApi} from "~/composables/useFetch";
const { getImageUrl } = useApi();


import image_placeholder from '@/assets/images/placeholderimage.webp'

interface IPropsData {
  title:string
  image:string
  date_added:string
}
function checkWitchImageShouldShow(src:string){
  if(src){
   return getImageUrl(src)
  }else{
    return image_placeholder
  }
}
const props = defineProps<IPropsData>()
</script>
<style scoped>

</style>