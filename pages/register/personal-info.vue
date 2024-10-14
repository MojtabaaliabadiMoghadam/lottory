<template>
  <register-layout-register>
    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا مشخصات خود را دقیق وارد کنید : </span>
      <div class="grid grid-cols-12 md:w-full md:px-[36rem] gap-8">
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input class-input="w-full" label="نام" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input class-input="w-full" label="نام خانوادگی" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input class-input="w-full" label="نام (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input class-input="w-full" label="نام خانوادگی (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input class-input="w-full" label="نام خانوادگی (انگلیسی)" />
        </div>
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <label class="" for="">تاریخ تولد شمسی</label>
          <div class="w-full flex gap-3 items-center">
            <Select v-model="selectedCity" :options="getJalaliOptions('day')" optionLabel="name" placeholder="روز" class="w-1/4" />
            <Select v-model="selectedCity" :options="getJalaliOptions('month')" optionLabel="name" placeholder="ماه" class="w-1/4" />
            <Select v-model="selectedCity" :options="getJalaliOptions('year')" optionLabel="name" placeholder="سال" class="w-2/4" />
          </div>
        </div>
      </div>
    </div>
  </register-layout-register>
</template>
<script setup lang="ts">
import Select from 'primevue/select';
const {getJalaliOptions} = useHelpers()
const selectedCity = ref()
let cities = [
  {name:'cs',id:1},
  {name:'vd',id:2},
]
</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>