<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <div class="bg-theme-primary-700 gap-3 md:py-8 py-4 md:px-20 w-full flex flex-col items-center justify-center">
      <span class="text-white md:text-[40px] text-[20px] font-medium select-none">
        ثبت نام لاتاری
      </span>
      <span class="text-white md:text-[20px] text-[12px] font-light select-none">
        همین حالا با انخاب گزینه مناسب ثبت نام خودتو انجام بده
      </span>
      <register-status-bar />
    </div>
    <div class="flex flex-col w-full items-center justify-center">
      <register-marriage />
    </div>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const store = useDataRegister()
console.log(store.text)
</script>