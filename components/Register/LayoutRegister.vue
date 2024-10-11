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
    <slot />

    <div class="flex items-center justify-between gap-10 pb-6 pt-10">
      <ui-kit-base-button @click-on="dynamicBack" label="صفحه قبل" theme="theme_secondary" class-button="md:py-2">
        <template #before_label>
          <span class="mdi mdi-chevron-right mdi-24px pe-4"/>
        </template>
      </ui-kit-base-button>
      <ui-kit-base-button @click-on="dynamicNext" label="ثبت و ادامه" theme="theme_secondary" class-button="md:py-2">
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
const {showSuccessToast} = useHelpers()
const store = useDataRegister()
const router = useRouter()
function dynamicBack() {
  switch (route.path) {
    case '/register/start':
      router.back()
      break;
  }
}
function dynamicNext(){
  if (route.path == '/register/start'){
    console.log(store.is_married != null)
    if (store.is_married != null){
      router.push('/personal-info')
    }else{
      showSuccessToast('sc')
    }
  }
}
</script>