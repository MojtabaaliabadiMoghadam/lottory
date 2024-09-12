<template>
  <ArticleLayout :data_side_bar="data_in_side_bar">
    <template #content>
      <div class="flex flex-col items-start my-6 gap-2 px-5 md:px-0">
            <span class="font-bold text-[20px]">
              مجله مهاجرتی کارت سبز
            </span>
        <span class="text-[16px] font-light">
              معرفی انواع ویزا، معرفی ایالت ها و مطالب خواندنی مهاجرتی در کارت سبز
            </span>
      </div>
      <div class="flex flex-col md:flex-row md:flex-wrap md:w-[816px] justify-center gap-10 md:gap-20">
        <template v-for="(data,key) in data_card_box" :key="key">
          <CardBoxArticle @click="goToArticle(data.id)"  :image_name="data.image" :title="data.title" :date_added="data.date"/>
        </template>
      </div>
    </template>
  </ArticleLayout>
</template>
<script setup lang="ts">
import ArticleLayout from "~/components/Article/ArticleLayout.vue";
import CardBoxArticle from "~/components/Article/CardBoxArticle.vue";
import {useApi} from "~/composables/useFetch";
const { get } = useApi();
const data_card_box = ref()
const error = ref()
const router = useRouter()
// const data_card_box = [
//   {id:1,image:'image_1',title:'کشور عمان',date:'1403-03-03'},
//   {id:2,image:'image_2',title:'وقت بیومتریک و انگشت نگاری ویزاهای کانادا',date:'1403-03-03'},
//   {id:3,image:'image_3',title:'ویزای عمان',date:'1403-03-03'},
//   {id:4,image:'image_4',title:'نحوه گرفتن گواهینامه رانندگی در امارات',date:'1403-03-03'},
//   {id:5,image:'image_5',title:'تحصیل پزشکی در امریکا و کانادا',date:'1403-03-03'},
//   {id:6,image:'image_6',title:'امور برندگان لاتاری تا دریافت ویزا',date:'1403-03-03'},
//   {id:7,image:'image_3',title:'ویزای عمان',date:'1403-03-03'},
//   {id:8,image:'image_4',title:'نحوه گرفتن گواهینامه رانندگی در امارات',date:'1403-03-03'},
//   {id:9,image:'image_5',title:'تحصیل پزشکی در امریکا و کانادا',date:'1403-03-03'},
// ]
const data_in_side_bar = [
  {question:'تلفن ثابت:',answer:'021-49374'},
  {question:'تلگرام و واتس اپ:',answer:'021-49374'},
  {question:'ایمیل:',answer:'info@cartesabz.net'},
  {question:'آدرس ایران:',answer:'تهران، اتوبان همت غرب، شهرک گلستان، بلوار کوهک (علیمرادی)، مجتمع تجاری اداری طوبی چیتگر، برج A شمالی، طبقه 11، واحد 1'},
  {question:'ساعت کاری:',answer:'همه روزه از 9 صبح الی 17 (پنجشنبه ها تا 13، بجز تعطیلات رسمی)'},
]
function goToArticle(id:number){
  router.push({path:`articles/${id}`})
}
const fetchData = async () => {
  try {
    const {status,data,errors} = await get('/blog');
    if(status == 200){
      data_card_box.value = data.blogs
      console.log(data_card_box.value,'data_card_box.value')
    }
  } catch (err: any) {
    error.value = err.message;
  }
};
onMounted(async ()=>{
  await fetchData()
})
</script>
<style>

</style>