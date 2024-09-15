<template>
  <div class="my-10 flex flex-col gap-3">
          <span class="text-[24px] font-bold">
            {{props.title}}
          </span>
    <span class="text-[16px] font-light max-w-[850px] text-wrap" v-html="props.description" />
  </div>
</template>
<script setup lang="ts">
interface IDataContent{
  title:string;
  description:string
}
const props =  defineProps<IDataContent>()
</script>