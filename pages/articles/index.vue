<template>
  <ArticleLayout  @clickOnButton="getData" :data_side_bar="data_in_side_bar">
    <template #content>
      <div class="flex w-full items-center justify-center my-6 gap-2 px-5 ">
        <span class="font-bold text-[20px]">
          لیست مقالات
        </span>
      </div>
      <div v-if="loadingDataBlogs" class="h-full w-full flex justify-center items-center">
          <svg aria-hidden="true" class=" inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      <div v-else class="grid grid-cols-12 gap-x-4 gap-y-10 w-full px-4">
        <div class="2xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12" v-for="(data,key) in data_card_box" :key="key">
          <CardBoxArticle @click="goToArticle(data.id)"  :image="data.images[0]?.url" :title="data.title" :date_added="extractDate(data.created_at)"/>
        </div>
      </div>
      <ui-kit-pagination v-if="!loadingDataBlogs && dataPagination?.total" :total="dataPagination?.total" :current="dataPagination?.current_page" @update="updateRequestFromPagination"/>
    </template>
  </ArticleLayout>
</template>
<script setup lang="ts">
import ArticleLayout from "~/components/Article/ArticleLayout.vue";
import CardBoxArticle from "~/components/Article/CardBoxArticle.vue";
import {useApi} from "~/composables/useFetch";
import {useHelpers} from "~/composables/useHelpers";
import {useDataGlobal} from "~/stores/globalStore";

const store = useDataGlobal()
const {getUrl,fetchData,showErrorToast,extractDate} = useHelpers()
const { get } = useApi();
const router = useRouter()
const data_card_box = ref<any>()
const error = ref()
const dataPagination = ref<any>()
const perPageData = ref<number>(12)
const loadingDataBlogs = ref<boolean>(true)
const data_in_side_bar = [
  {question:'تلگرام و واتس اپ:',answer:'09012336675'},
  {question:'ایمیل:',answer:'ayandesabz.@gmail.com'},
  {question:'ساعت کاری:',answer:'همه روزه از 9 صبح الی 17 (پنجشنبه ها تا 13، بجز تعطیلات رسمی)'},
]

function goToArticle(id:number){
  router.push({path:`articles/${id}`})
}

async function getData (page?:any){
  loadingDataBlogs.value = true
  let url = getUrl('/blog')
  try {
    const {status,data,message} = await fetchData({
      url:url,
      method:'GET',
      parameters:{
        per_page: perPageData.value,
        page: page ? page : 1,
        search:store.searchFieldInArticle
      },
    })
    if (status == 200){
      data_card_box.value = data.blogs
      dataPagination.value = data.pagination
    }
  }catch (err:any){
    showErrorToast(err)
  }finally {
    loadingDataBlogs.value = false
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