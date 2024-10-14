<template>
  <register-layout-register>
    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا مشخصات خود را دقیق وارد کنید : </span>
      <div class="grid grid-cols-12 max-w-7xl gap-8">
        <div class="md:col-span-6 col-span-12 flex items-center justify-center">
          <ui-kit-input label="نام" />
        </div>
        <div class="md:col-span-6 col-span-12 flex items-center justify-center">
          <ui-kit-input label="نام خانوادگی" />
        </div>
        <div class="md:col-span-6 col-span-12 flex items-center justify-center">
          <ui-kit-input label="نام (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12 flex items-center justify-center">
          <ui-kit-input label="نام خانوادگی (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12 flex items-center justify-center">
          <ui-kit-input label="نام خانوادگی (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12 flex flex-col items-start w-full justify-center">
          <label class="" for="">تاریخ تولد</label>
          <DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input" />
        </div>
      </div>
    </div>
  </register-layout-register>
</template>
<script setup lang="ts">
import DatePicker from 'primevue/datepicker';
const icondisplay = ref()
</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>