<template>
  <register-layout-register>
    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا اطلاعات سکونت و شماره تماس را وارد کنید : </span>
      <div class="grid grid-cols-12 md:w-full md:px-[36rem] gap-8">
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <label class="" for="">کشور سکونت فعلی :</label>
          <div class="w-full flex gap-3 items-center">
            <Select v-model="store.formData.birth_country_id" :options="getJalaliOptions('day')" optionLabel="name" placeholder="" class="w-full" />
          </div>
        </div>
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <label class="" for="">استان سکونت فعلی :</label>
          <div class="w-full flex gap-3 items-center">
            <Select v-model="store.formData.birth_city_id" :options="getJalaliOptions('day')" optionLabel="name" placeholder="" class="w-full" />
          </div>
        </div>
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <label class="" for="">شهر سکونت فعلی :</label>
          <div class="w-full flex gap-3 items-center">
            <Select v-model="store.formData.birth_city_id" :options="getJalaliOptions('day')" optionLabel="name" placeholder="" class="w-full" />
          </div>
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.first_name_persian" class-input="w-full" label="کد پستی (اجباری نیست):" />
        </div>
        <div class="col-span-12">
          <ui-kit-input v-model="store.formData.first_name_persian" class-input="w-full" label="ادرس محل سکونت فعلی:" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.first_name_persian" class-input="w-full" label="شماره موبایل :" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.first_name_persian" class-input="w-full" label="ایمیل :" />
        </div>
        <div class="col-span-12 gap-2 flex items-center w-full justify-start">
          <label class="" for="">قوانین اینده سبز را میپذیرم</label>
            <Checkbox v-model="checked" :binary="true" />
          <NuxtLink class="text-theme-primary-800 cursor-pointer select-none hover:text-theme-primary-600">(مشاهده قوانین)</NuxtLink>
        </div>
      </div>
    </div>
  </register-layout-register>
</template>
<script setup lang="ts">
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import {useDataRegister} from "~/stores/dataRegisterStore";
const {getJalaliOptions} = useHelpers()
const store = useDataRegister()


</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>