<template>
  <ArticleLayout :data_side_bar="data_in_side_bar">
    <template #content>
      <div class="flex flex-col items-start my-6 gap-2 px-5 ">
            <span class="font-bold text-[20px]">
              مجله مهاجرتی کارت سبز
            </span>
        <span class="text-[16px] font-light">
              معرفی انواع ویزا، معرفی ایالت ها و مطالب خواندنی مهاجرتی در کارت سبز
        </span>
      </div>
      <div class="grid grid-cols-12 gap-x-4 gap-y-10 w-full px-4">
        <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12" v-for="(data,key) in data_card_box" :key="key">
          <CardBoxArticle @click="goToArticle(data.id)"  :image="data.images[0]?.url" :title="data.title" :date_added="extractDate(data.created_at)"/>
        </div>
      </div>
      <ui-kit-pagination :total="dataPagination?.total" :current="dataPagination?.current_page" @update="updateRequestFromPagination"/>
    </template>
  </ArticleLayout>
</template>
<script setup lang="ts">
import ArticleLayout from "~/components/Article/ArticleLayout.vue";
import CardBoxArticle from "~/components/Article/CardBoxArticle.vue";
import {useApi} from "~/composables/useFetch";
import {useHelpers} from "~/composables/useHelpers";
const {getUrl,fetchData,showErrorToast,extractDate} = useHelpers()
const { get } = useApi();
const router = useRouter()

const data_card_box = ref<any>()
const error = ref()
const dataPagination = ref<any>()
const perPageData = ref<number>(12)

const data_in_side_bar = [
  {question:'تلفن ثابت:',answer:'021-49374'},
  {question:'تلگرام و واتس اپ:',answer:'021-49374'},
  {question:'ایمیل:',answer:'info@cartesabz.net'},
  {question:'آدرس ایران:',answer:'تهران، اتوبان همت غرب، شهرک گلستان، بلوار کوهک (علیمرادی)، مجتمع تجاری اداری طوبی چیتگر، برج A شمالی، طبقه 11، واحد 1'},
  {question:'ساعت کاری:',answer:'همه روزه از 9 صبح الی 17 (پنجشنبه ها تا 13، بجز تعطیلات رسمی)'},
]
function goToArticle(id:number){
  router.push({path:`blogs/${id}`})
}
async function getData (page?:any){
  let url = getUrl('/blog')
  try {
    const {status,data,message} = await fetchData({
      url:url,
      method:'GET',
      parameters:{
        per_page: perPageData.value,
        page: page ? page : 1
      }
    })
    if (status == 200){
      data_card_box.value = data.blogs
      dataPagination.value = data.pagination
    }
  }catch (err:any){
    showErrorToast(err)
  }
}
async function updateRequestFromPagination(currentInput){
  await getData(currentInput)
}
onMounted(async ()=>{
  await getData()
})
</script>
<style>

</style>