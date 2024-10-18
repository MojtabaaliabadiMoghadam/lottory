<template>
  <div class="md:mx-0 bg-white rounded-3xl flex flex-col justify-center items-center md:hover:border-4 transition-all ease-in duration-150 md:hover:border-theme-primary-500 border-4 border-transparent" >
    <span class="py-5 px-4 text-center font-bold text-[20px]" >
      {{ props.title }}
    </span>
    <div class="flex flex-col gap-14 items-center justify-center" >
      <ui-kit-input label="شماره موبایل:" v-model="formData.mobile" />
      <ui-kit-input label="ایمیل:" v-model="formData.email" />
      <button @click="submitForm" class="bg-theme-primary-500 md:hover:border-theme-primary-700 font-bold w-[280px] h-[48px] text-white text-[20px] rounded-xl mb-5 mx-10 mt-3">
        {{ props.title_button }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts" >
import {ref} from 'vue'
import axios from 'axios'
// import captcha from "~/stores/captcha";

interface IPropsCard {
  title: string
  title_button: string
}

// تعریف props
const props = defineProps<IPropsCard>()

// تعریف متغیر formData
const formData = ref<{ mobile: string; email: string }>({
  mobile: '',
  email: ''
})

// تابع ارسال فرم
const submitForm = async () => {
  try {
    const url ='https://ayandesabz.ir/api/lottery-register/quick-register'
    const response = await axios.post(url, {
      mobile: formData.value.mobile,
      email: formData.value.email
    })

    console.log('Response:', response.data)
    // می‌توانید پس از موفقیت یک پیام موفقیت نمایش دهید یا کار دیگری انجام دهید
  } catch (error) {
    console.error('Error:', error)
    // می‌توانید خطا را مدیریت کنید
  }
};
</script>
<style scoped>
</style>