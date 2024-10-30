<template>
  <div class="flex flex-col w-full gap-4 items-center justify-center border-t-2 border-theme-primary-900">
    <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا همسر خود را وارد کنید : </span>
    <div class="grid grid-cols-12 md:w-full md:px-[36rem] gap-8">
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="store.formData.wife_info.first_name_persian" class-input="w-full" label="نام :" />
      </div>
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="store.formData.wife_info.last_name_persian" class-input="w-full" label="نام خانوادگی :" />
      </div>
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="store.formData.wife_info.first_name_english" class-input="w-full" label="نام (انگلیسی) :" />
      </div>
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="store.formData.wife_info.last_name_english" class-input="w-full" label="نام خانوادگی (انگلیسی) :" />
      </div>
      <div class="md:col-span-3 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
        <label class="" for="">جنسیت :</label>
        <div class="w-full flex gap-6 items-center">
          <div class="flex items-center gap-2">
            <RadioButton v-model="store.formData.wife_info.gender" inputId="ingredient1" name="pizza" value="female" />
            <label for="ingredient1" class=" font-bold">زن</label>
          </div>
          <div class="flex gap-2 items-center">
            <RadioButton v-model="store.formData.wife_info.gender" inputId="ingredient2" name="pizza" value="male" />
            <label for="ingredient2" class=" font-bold">مرد</label>
          </div>
        </div>
      </div>
      <div class="md:col-span-9 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
        <ui-kit-base-date-picker-with-select v-model="store.formData.wife_info.birthdate" label="تاریخ تولد شمسی :"/>
      </div>
      <div class="md:col-span-6 col-span-12">
        <div class="w-full flex gap-3 items-center">
          <ui-kit-base-select
              :label="dataFormOptions.country.label"
              :url="dataFormOptions.country.url"
              :item-name="dataFormOptions.country.itemName"
              fullWidth
              v-model="store.formData.wife_info.birth_country_id"
              :label-name="dataFormOptions.country.nameLabel"
              :value-name="dataFormOptions.country.nameValue"
          />
        </div>
      </div>
      <div class="md:col-span-6 col-span-12">
        <ui-kit-base-select
            :label="dataFormOptions.city.label"
            :url="dataFormOptions.city.url"
            :item-name="dataFormOptions.city.itemName"
            fullWidth
            v-model="store.formData.wife_info.birth_city_id"
            :label-name="dataFormOptions.city.nameLabel"
            :value-name="dataFormOptions.city.nameValue"
        />
      </div>
      <div class=" col-span-12 gap-2 flex flex-col items-start w-full justify-center">
        <ui-kit-base-select
            :label="dataFormOptions.lastEducation.label"
            :url="dataFormOptions.lastEducation.url"
            :item-name="dataFormOptions.lastEducation.itemName"
            fullWidth
            v-model="store.formData.wife_info.education_level"
            :label-name="dataFormOptions.lastEducation.nameLabel"
            :value-name="dataFormOptions.lastEducation.nameValue"
        />
      </div>
      <div class="col-span-12 gap-2 flex flex-col items-center w-full justify-center">
        <label class="" for="">عکس خود را بارگزاری کنید :</label>
        <div class="flex items-center w-full justify-between">
          <div>
            <label
                class="flex px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-lg hover:bg-blue-600"
                for="fileInput"
            >
              {{ store.formData.wife_info.image ? 'تغییر تصویر ' : 'بارگزاری تصویر' }}
            </label>
          </div>
          <input
              id="fileInput"
              type="file"
              class="hidden"
              @change="handleFileUpload"
              accept="image/*"
          />
          <div class="mt-4">
            <img :src="store.formData.wife_info.image ? store.formData.wife_info.image : placeHolderImage" alt="Image Preview" class="w-32 h-32 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import placeHolderImage from "assets/images/placeholderimage.webp";
import RadioButton from "primevue/radiobutton";
import Select from "primevue/select";
import {useDataRegister} from "~/stores/dataRegisterStore";

const {getJalaliOptions} = useHelpers()
const store = useDataRegister()
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files ? target.files[0] : null

  if (file) {
    store.formData.wife_info.image = URL.createObjectURL(file)
  }
}
const dataFormOptions = reactive({
  city:{
    label:"شهر محل تولد :",
    url:"cities",
    itemName:"cities",
    nameLabel:"name",
    nameValue:"id"
  },
  country:{
    label:"کشور محل تولد :",
    url:"countries",
    itemName:"countries",
    nameLabel:"name",
    nameValue:"id"
  },
  lastEducation:{
    label:"اخرین وضعیت تحصیلی :",
    url:"education-levels",
    itemName:"education_levels",
    nameLabel:"key",
    nameValue:"id"
  }
})
</script>