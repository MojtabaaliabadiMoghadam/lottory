<template>
    <div class="bg-[#efefef] px-6 md:px-0 py-10">
      <div v-if="!showNotFoundPage" class="mx-auto md:max-w-5xl">
        <div class="flex flex-col gap-5 items-start mb-10">
          <slot name="title-box"/>
        </div>
        <div class="flex flex-col gap-y-5" v-if="loadingDataQuestion">
          <div v-for="item in [1,2,3,4,5,6]" role="status" class=" py-3 px-4 space-y-4 border border-gray-200 divide-y divide-gray-500 bg-gray-100 rounded-xl shadow-md
          animate-pulse md:p-6">
            <div  class="flex items-center justify-between w-full">
              <div class="w-3/4">
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 "></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>

        </div>
        <div v-else v-for="(question , index) in questions" :key="index"
             class="flex flex-col gap-3"
             :class="{ 'gap-0': question.expanded}"
        >
          <button
              :id="'questions-title-' + (index + 1)"
              type="button"
              class="py-3 px-4 rounded-xl font-light w-full bg-theme-primary-200 flex items-center justify-between  gap-2 cursor-pointer"
              @click="toggleAccordion(index)"
              :aria-expanded="question.expanded"
              :aria-controls="'questions-text-' + (index + 1)"
          >
              <span
                  :class="{ '': question.expanded}"
                  class=" text-black font-light text-right w-10/12 text-[16px] tracking-[0.02em]">{{ question.question }}
              </span>
              <span class="mdi mdi-24px text-black"
                 :class="{
                     'mdi-plus-box-outline':!question.expanded,
                     'mdi-minus-box-outline':question.expanded
                 }">
            </span>
          </button>
          <div
              :id="'questions-text-' + (index + 1)"
              role="region"
              :aria-labelledby="'questions-title-' + (index + 1)"
              class="text-right grid bg-theme-primary-200 text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out rounded-xl"
              :class="question.expanded ? 'mb-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="p-5 text-[16px] font-normal tracking-[0.02em] !leading-[25px]">{{ question.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex w-full items-center justify-center">
        <span class="text-[20px] font-bold">
          هیچ رکوردی برای نمایش وجود ندارد
        </span>
      </div>
    </div>
</template>
<script setup lang="ts">
import {useHelpers} from "~/composables/useHelpers";
const {getUrl,fetchData,showErrorToast} = useHelpers()
const showNotFoundPage = ref<boolean>(false)
interface IQuestion {
  id: number,
  question: string,
  answer: string
  category: string,
  status: number,
  order: number
}
const questions = ref<IQuestion[]>([]);
const loadingDataQuestion = ref<boolean>(true)
const toggleAccordion = (value:number) => {
  questions.value.forEach((faq, i) => {
    if (value === i) {
      faq.expanded = !faq.expanded;
    } else {
      faq.expanded = false;
    }
  });
};

async function getData (page?:any){
  loadingDataQuestion.value = true
  let url = getUrl('/faqs')
  try {
    const {status,data,message} = await fetchData({
      url:url,
      method:'GET',
      // parameters:{
      //   category:'about_lottery'
      // }
    })
    if (status == 200){
      questions.value = data.faqs.map((question)=>{
        return {
          ...question,
          expanded : false
        }
      })
      showNotFoundPage.value = false
    }else{
      showNotFoundPage.value = true
    }
  }catch (err:any){
    showErrorToast(err)
  }finally {
    loadingDataQuestion.value = false
  }
}
onMounted(async ()=>{
  await getData()
})
</script>
<style>
.gradient {
  /* Linear Gradient */
  background: #B2F1F5;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>