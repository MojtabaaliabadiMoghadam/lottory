<template>
  <div class="flex gap-4 flex-col items-center cursor-pointer ">
    <div class="h-[205px] w-[205px] hover-class hover-class">
      <img class="rounded-xl hover:rounded-xl hover:border-2 hover:border-green-700" :src="computed_show_image">
    </div>
    <div class="font-bold text-red-500 w-[200px]">
      <span class="text-wrap hover:text-green-600">
        {{props.title}}
      </span>
    </div>
    <div class="font-light flex justify-start w-full">
      {{props.date_added}}
    </div>
  </div>
</template>
<script setup lang="ts">
import image_1 from '@/assets/images/image-1.jpg'
import image_2 from '@/assets/images/image-2.jpg'
import image_3 from '@/assets/images/image-3.jpg'
import image_4 from '@/assets/images/image-4.jpg'
import image_5 from '@/assets/images/image-5.jpg'
import image_6 from '@/assets/images/image-6.webp'
interface IPropsData {
  title:string
  image_name:string
  date_added:string
}
const computed_show_image = computed(()=>{
  switch (props.image_name){
    case 'image_1':
      return image_1
    case 'image_2':
      return image_2
    case 'image_3':
      return image_3
    case 'image_4':
      return image_4
    case 'image_5':
      return image_5
    case 'image_6':
      return image_6
  }
})
const props = defineProps<IPropsData>()
</script>
<style scoped>

</style>