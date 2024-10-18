<template>
  <div class=" md:mx-0 bg-white px-9 rounded-3xl flex flex-col justify-center items-center md:hover:border-4
   transition-all ease-in duration-150 md:hover:border-theme-primary-500 border-4 border-transparent">
    <span class="py-3 px-8 text-center font-bold text-[20px]">{{ props.title }}</span>
    <div class="flex flex-col gap-14 items-center justify-center">
      <div class="w-full flex items-center justify-center">
        <ui-kit-input label="ایمیل:" class-input="w-72" v-model="email"/>
      </div>
      <ui-kit-input label="شماره موبایل:" class-input="w-72" v-model="mobile"/>
      <div class="pb-7">
        <ui-kit-base-button @click-on="submitData" :label="props.title_button"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const {getUrl,fetchData,showSuccessToast,showErrorToast} = useHelpers()
interface IPropsCard {
  title: string
  title_button:string
}

const props = withDefaults(defineProps<IPropsCard>(), {})

const mobile = ref<string>('')
const email = ref<string>('')
async function submitData(){
  const url = getUrl('lottery-register/quick-register');
  const {status,message} = await fetchData({
    url,
    method:'POST',
    data:{
      mobile:mobile.value,
      email:email.value
    }
  })
  console.log(message,'**********')
  if (status){
    showSuccessToast(message)
  }else{
    showErrorToast(message)
  }
}

</script>