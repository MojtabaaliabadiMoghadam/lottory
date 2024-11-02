<template>
  <div class="flex flex-col w-full gap-4 items-center justify-center border-t-2 border-theme-primary-900">
    <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">لطفا مشخصات فرزندان خود را وارد کنید :</span>
    <div v-for="(child, index) in store.formData.children_info" :key="index" class="grid grid-cols-12 md:w-full md:px-[36rem] gap-8">
      <div class="col-span-12 flex items-center justify-center">
        <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3"> مشخصات فرزند {{ index + 1 }}</span>
      </div>

      <!-- Persian First Name -->
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="child.first_name_persian" class-input="w-full" label="نام :" />
      </div>

      <!-- Persian Last Name -->
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="child.last_name_persian" class-input="w-full" label="نام خانوادگی :" />
      </div>

      <!-- English First Name -->
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="child.first_name_english" class-input="w-full" label="نام (انگلیسی) :" />
      </div>

      <!-- English Last Name -->
      <div class="md:col-span-6 col-span-12">
        <ui-kit-input v-model="child.last_name_english" class-input="w-full" label="نام خانوادگی (انگلیسی) :" />
      </div>

      <!-- Gender Selection -->
      <div class="md:col-span-3 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
        <label>جنسیت :</label>
        <div class="w-full flex gap-6 items-center">
          <RadioButton v-model="child.gender_status" inputId="genderFemale" name="gender" value="female" />
          <label for="genderFemale" class="font-bold">زن</label>
          <RadioButton v-model="child.gender_status" inputId="genderMale" name="gender" value="male" />
          <label for="genderMale" class="font-bold">مرد</label>
        </div>
      </div>

      <!-- Birthdate (Jalali Date Selectors) -->
      <div class="md:col-span-9 col-span-12 gap-2 flex flex-col items-start w-full justify-center">
        <ui-kit-base-date-picker-with-select v-model="child.birthdate" label="تاریخ تولد شمسی :"/>
      </div>
      <!-- Country and City Select -->
      <div class="md:col-span-6 col-span-12">
        <ui-kit-base-select
            :label="dataFormOptions.country.label"
            :url="dataFormOptions.country.url"
            :item-name="dataFormOptions.country.itemName"
            fullWidth
            v-model="child.birth_country_id"
            :label-name="dataFormOptions.country.nameLabel"
            :value-name="dataFormOptions.country.nameValue"
        />
      </div>

      <div class="md:col-span-6 col-span-12">
        <ui-kit-base-select
            :label="dataFormOptions.city.label"
            :url="dataFormOptions.city.url"
            :item-name="dataFormOptions.city.itemName"
            fullWidth
            v-model="child.birth_city_id"
            :label-name="dataFormOptions.city.nameLabel"
            :value-name="dataFormOptions.city.nameValue"
        />
      </div>

      <!-- Image Upload -->
      <div class="col-span-12 gap-2 flex flex-col items-center w-full justify-center">
        <label>عکس خود را بارگزاری کنید :</label>
        <div class="flex items-center w-full justify-between">
          <label class="flex px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-lg hover:bg-blue-600" :for="`child-${index}`">
            {{ child.image ? 'تغییر تصویر ' : 'بارگزاری تصویر' }}
          </label>
          <input
              :id="`child-${index}`"
              type="file"
              class="hidden"
              @change="(event) => handleFileUpload(event, index)"
              accept="image/*"
          />
          <img :src="child.image || placeHolderImage" alt="Image Preview" class="w-32 h-32 object-cover rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import placeHolderImage from 'assets/images/placeholderimage.webp';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import { useDataRegister } from '~/stores/dataRegisterStore';
const store = useDataRegister();
const { getJalaliOptions } = useHelpers();

// Define ChildInfo interface
interface ChildInfo {
  first_name_english: string;
  last_name_english: string;
  first_name_persian: string;
  last_name_persian: string;
  birth_country_id: number;
  birth_province_id: number;
  birth_city_id: number;
  birthdate: string;
  nationality: string;
  citizenship_country_id: number;
  image: string;
  image_status: number;
}

// Form options for select components
const dataFormOptions = reactive({
  city: {
    label: 'شهر محل تولد :',
    url: 'cities',
    itemName: 'cities',
    nameLabel: 'name',
    nameValue: 'id',
  },
  country: {
    label: 'کشور محل تولد :',
    url: 'countries',
    itemName: 'countries',
    nameLabel: 'name',
    nameValue: 'id',
  },
  lastEducation: {
    label: 'اخرین وضعیت تحصیلی :',
    url: 'education-levels',
    itemName: 'education_levels',
    nameLabel: 'key',
    nameValue: 'id',
  },
});

// Initialize child info array based on the number of children
function initializeChildren() {
  store.formData.children_info = Array.from({ length: store.formData.children_count }, () => ({
    first_name_english: '',
    last_name_english: '',
    first_name_persian: '',
    last_name_persian: '',
    gender_status:'male',
    birth_country_id: 0,
    // birth_province_id: 0,
    birth_city_id: 0,
    birthdate: '',
    nationality: '',
    citizenship_country_id: 0,
    image: '',
    image_status: 0,
  }));
}

// Handle file upload for each child
const handleFileUpload = (event: Event, index: number) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    store.formData.children_info[index].image = URL.createObjectURL(file);
  }
};

// Run initialization on mount
onMounted(() => {
  initializeChildren();
});
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
