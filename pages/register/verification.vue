<template>
  <register-layout-register>
    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا اطلاعات سکونت و شماره تماس را وارد کنید : </span>
      <div class="grid grid-cols-12 md:w-full md:px-[36rem] gap-8">
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <ui-kit-base-select
              :label="dataFormOptions.country.label"
              :url="dataFormOptions.country.url"
              :item-name="dataFormOptions.country.itemName"
              fullWidth
              v-model="store.formData.residence_country_id"
              :label-name="dataFormOptions.country.nameLabel"
              :value-name="dataFormOptions.country.nameValue"
          />
        </div>
        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
          <ui-kit-base-select
              :label="dataFormOptions.city.label"
              :url="dataFormOptions.city.url"
              :item-name="dataFormOptions.city.itemName"
              fullWidth
              v-model="store.formData.residence_city"
              :label-name="dataFormOptions.city.nameLabel"
              :value-name="dataFormOptions.city.nameValue"
          />
        </div>
<!--        <div class="md:col-span-6 col-span-12 gap-2 flex flex-col items-start w-full justify-center">-->
<!--          <ui-kit-base-select-->
<!--              :label="dataFormOptions.province.label"-->
<!--              :url="dataFormOptions.province.url"-->
<!--              :item-name="dataFormOptions.province.itemName"-->
<!--              fullWidth-->
<!--              v-model="store.formData.residence_province"-->
<!--              :label-name="dataFormOptions.province.nameLabel"-->
<!--              :value-name="dataFormOptions.province.nameValue"-->
<!--          />-->
<!--        </div>-->
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.postal_code" class-input="w-full" label="کد پستی (اجباری نیست):" />
        </div>
        <div class="col-span-12 md:col-span-6">
          <ui-kit-input v-model="store.formData.current_address" class-input="w-full" label="ادرس محل سکونت فعلی:" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.mobile" class-input="w-full" label="شماره موبایل :" />
        </div>
        <div class="md:col-span-6 col-span-12">
          <ui-kit-input v-model="store.formData.emailL" class-input="w-full" label="ایمیل :" />
        </div>
        <div class="col-span-12 gap-2 flex items-center w-full justify-start">
          <label class="" for="">قوانین اینده سبز را میپذیرم</label>
            <Checkbox v-model="store.acceptRule" :binary="true" />
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

const dataFormOptions = reactive({
  city:{
    label:"شهر سکونت فعلی :",
    url:"cities",
    itemName:"cities",
    nameLabel:"name",
    nameValue:"id"
  },
  country:{
    label:"کشور سکونت فعلی :",
    url:"countries",
    itemName:"countries",
    nameLabel:"name",
    nameValue:"id"
  },
  province:{
    label:"استان سکونت فعلی :",
    url:"cities",
    itemName:"cities",
    nameLabel:"name",
    nameValue:"id"
  }
})
</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>