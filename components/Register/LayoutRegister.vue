<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <div class="bg-theme-primary-700 gap-3 md:py-8 py-4 md:px-20 w-full flex flex-col items-center justify-center">
      <span class="text-white md:text-[40px] text-[20px] font-medium select-none">
        ثبت نام لاتاری
      </span>
      <span class="text-white md:text-[20px] text-[14px] font-light select-none">
        همین حالا با انخاب گزینه مناسب ثبت نام خودتو انجام بده
      </span>
      <register-status-bar/>
    </div>
    <slot/>

    <div class="flex items-center justify-between gap-10 pb-6 pt-10">
      <ui-kit-base-button @click-on="dynamicBack" label="صفحه قبل" theme="theme_secondary" class-button="md:!py-2">
        <template #before_label>
          <span class="mdi mdi-chevron-right mdi-24px pe-4"/>
        </template>
      </ui-kit-base-button>
      <ui-kit-base-button @click-on="dynamicNext"
                          :label="titleButtonComputed"
                          theme="theme_secondary" class-button="md:!py-2">
        <template #after_label>
          <span class="mdi mdi-chevron-left mdi-24px ps-4"/>
        </template>
      </ui-kit-base-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const route = useRoute()
const {showErrorToast} = useHelpers()
const store = useDataRegister()
const router = useRouter()

function dynamicBack() {
  router.back()
}
function prepareDataMarriedStatus(){
  if (store.isMarried == 0){
    switch (store.kindNotMarried){
      case 'not-married':
        store.formData.married_status = 1
      break;
      case 'absolute':
        store.formData.married_status = 2
        break;
      case 'deceased-wife':
        store.formData.married_status = 3
        break;
      case 'separation':
        store.formData.married_status = 3
        break;
    }
  }else{
    switch (store.kindMarried){
      case 'american-citizen':
        store.formData.married_status = 5
        break;
      case 'not-american-citizen':
        store.formData.married_status = 4
        break;
    }
  }
}
function dynamicNext() {
  switch (route.path) {
    case '/register/start' :
      if (store.formData.married_status != null) {
        prepareDataMarriedStatus()
        router.push('personal-info')
        localStorage.setItem('data_register',JSON.stringify(store?.formData))
      } else {
        showErrorToast(' ! ابتدا وضعیت تاهل خود را مشخص کنید')
      }
      break;
    case  '/register/personal-info' :
      localStorage.setItem('data_register',JSON.stringify(store?.formData))
        // if (store.)
      router.push('verification')
      break;
    case  '/register/verification' :
      if (store.acceptRule){
        router.push('payment')
      }else{
        showErrorToast('لطفا قوانین هتل را بپذیرید')
      }
      break;``
  }
}
const titleButtonComputed = computed(()=>{
  switch (route.path) {
    case  '/register/verification' :
      return 'تکمیل خرید'
    case  '/register/payment' :
      return 'تکمیل خرید'
    default :
      return 'ثبت و ادامه'
  }
})
</script>