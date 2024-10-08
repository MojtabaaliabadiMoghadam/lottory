<template>
  <div class="flex flex-col w-full items-center justify-center">
    <span class="text-[20px] font-bold text-theme-primary-950 py-5">
      وضعیت تاهل خود را مشخص کنید :
    </span>
    <div class="flex items-center justify-center py-4 w-full gap-5">
      <ui-kit-base-button @click-on="store.is_married = 0" :active="store.is_married == 0" class-button="md:!px-20" label="مجرد"/>
      <ui-kit-base-button @click-on="store.is_married = 1" :active="store.is_married == 1" class-button="md:!px-20" label="متاهل"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const store = useDataRegister()
</script>