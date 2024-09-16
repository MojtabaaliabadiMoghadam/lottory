<template>
  <ArticleLayout :data_side_bar="data_in_side_bar">
    <template #content>
      <div v-if="loadingDataBlog" class="flex w-full items-center justify-center h-full">
        <div role="status">
          <svg aria-hidden="true" class="w-12 h-12 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else class="my-10 flex flex-col gap-5  justify-center">
        <div class="max-w-[830px] h-[300px] overflow-hidden">
          <img class="rounded-xl w-full h-full object-cover" :src="showImage" alt="image-blog">
        </div>
<!--        <div class="rounded-xl bg-[#f5f4f3] p-2 flex flex-col shadow-xl ">-->
<!--          <span class="text-[16px] ps-3 font-bold">فهرست مطالب</span>-->
<!--          <template v-for="(data,index) in data_suggest" :key="index">-->
<!--            <div class="flex items-center cursor-pointer h-[30px]">-->
<!--              <span class="mdi mdi-menu-left mdi-36px text-blue-900"></span>-->
<!--              <NuxtLink :to="{hash: `#${data.id}`}" class="text-blue-500 font-medium hover:text-blue-300">{{data.text}}</NuxtLink>-->
<!--            </div>-->
<!--          </template>-->
<!--        </div>-->
          <div>
            <article-title-content-show :title="dataBlog?.title" :description="dataBlog?.text"/>
          </div>
        <div class="w-full flex items-center justify-start gap-3">
          <span class="text-[16px] text-black-50 font-bold">
            تاریخ انتشار :
          </span>
          <span class="text-[16px] text-black-50">
            {{extractDate(dataBlog?.created_at)}}
          </span>
        </div>
      </div>
    </template>
  </ArticleLayout>
</template>
<script setup lang="ts">
import {useHelpers} from "~/composables/useHelpers";
const {getUrl,fetchData,showErrorToast,addBackendToImageUrl,extractDate} = useHelpers()
import image_placeholder from '@/assets/images/placeholderimage.webp'
const route = useRoute()
const loadingDataBlog = ref(true)
const data_in_side_bar = [
  {question: 'تلفن ثابت:', answer: '021-49374'},
  {question: 'تلگرام و واتس اپ:', answer: '021-49374'},
  {question: 'ایمیل:', answer: 'info@cartesabz.net'},
  {question: 'آدرس ایران:', answer: 'تهران، اتوبان همت غرب، شهرک گلستان، بلوار کوهک (علیمرادی)، مجتمع تجاری اداری طوبی چیتگر، برج A شمالی، طبقه 11، واحد 1'},
  {question: 'ساعت کاری:', answer: 'همه روزه از 9 صبح الی 17 (پنجشنبه ها تا 13، بجز تعطیلات رسمی)'},
]
// const data_suggest = [
//   {id:'first', text:'دبی چگونه شهری است؟'},
//   {id:'second',text:'زندگی در دبی چگونه است؟ مزایا و معایب این شهر شگفت‌انگیز'},
//   {id:'third',text:'شرایط زندگی در دبی برای ایرانیان'},
//   {id:'fourth',text:'هزینه‌های زندگی در دبی'}
// ]
// const data_first = 'برای سفر به کشورهای دیگر نیاز به مجوز سفر یا ویزای آن کشور است که دریافت آن مستلزم طی کردن پروسه‌ای مشخص است. همه افرادی که متقاضی دریافت ویزای یک کشور، به‌دنبال روشی برای تسریع روند اخذ ویزای خود هستند. یکی از روش‌هایی که با انجام می‌توان فرایند اخذ ویزا را سرعت بخشید، استفاده از خدمات کمپانی وی اف سی گلوبال است. این شرکت خدمات مختلفی را در زمینه تنظیم اسناد و مدارک ویزا ارائه می‌کند تا فرایند درخواست و دریافت ویزا برای متقاضیان تسریع شود. احتمالا این سوال برای شما ایجاد شده است که VFS Global برای چه کشورهایی کاربرد دارد و با مراجعه به آن اقدامات اولیه دریافت ویزای کدام کشور قابل انجام است. در ادامه به این سوال پاسخ خواهیم داد.\n'

// const text_descriptions = [
//   {
//     id:'first',
//     title: 'دبی چگونه شهری است؟',
//     description: 'دبی مهم‌ترین و بزرگ‌ترین شهر در کشور امارات و واقع در جنوب شرقی خلیج فارس است که به‌عنوان یکی از بزرگ‌ترین مراکز تجارت در کل خاورمیانه شناخته می‌شود. این شهر از نظر موقعیت اقتصادی یکی از برترین شهرهای قاره آسیا است که این موقعیت از استخراج نفت و تجارت بین‌المللی نشات می‌گیرد. این شهر در چند سال اخیر شاهد تحولات زیادی بوده و امکانات رفاهی، خدماتی و تفریحی متعددی در آن ایجاد شده است. تا پیش از این تغییر و تحول، شهرهای کشور ترکیه به‌خصوص استانبول به‌دلیل نزدیکی به اروپا جزو شهرهای لوکس آسیا محسوب می‌شدند، اما در سال‌های اخیر دبی توانسته است خود را در صدر لیست لوکس‌ترین شهرهای آسیا قرار دهد.',
//   },
//   {
//     id:'second',
//     title: 'زندگی در دبی چگونه است؟ مزایا و معایب این شهر شگفت‌انگیز\n',
//     description: 'مانند هر شهر دیگری، متقاضیان مهاجرت به دبی باید مزایا و معایب زندگی در این شهر را در نظر داشته باشند. بررسی مزایا و معایب کمک می‌کند که با خیال آسوده‌تری مقصد مهاجرت خود را انتخاب کنید و برای زندگی در آن آماده باشید. در ادامه پاسخ به سوال زندگی در دبی چگونه است؟، چند مورد از مهم‌ترین مزایا و معایب زندگی در این شهر را توضیح خواهیم داد.',
//   },
//   {
//     id:'third',
//     title: 'شرایط زندگی در دبی برای ایرانیان\n',
//     description: 'با توجه‌به همه مزایا و معایب گفته شده در بخش قبلی زندگی در دبی چگونه است؟، می‌توان گفت که شرایط زندگی در دبی برای ایرانیان چندان سخت نیست. این شهر از نظر امنیتی در سطح بالایی قرار دارد و مشکلاتی مانند دزدی، جیب‌بری و… در آن اتفاق نمی‌افتند. به‌علاوه، از نظر درمانی و مراقبت‌های بهداشتی، دبی امکانات خوبی داشته و بیمارستان‌هایی کاملا مجهز دارد. دبی نزدیک ایران است و از نظر فرهنگی شباهت‌های زیادی میان این دو وجود دارد. برای مثال، دبی هم مانند ایران پیرو دین اسلام است که این موضوع زندگی برای ایرانیان را ساده‌ می‌کند. از طرفی، در بیشتر آداب و رسوم این کشور، شباهت‌های زیادی به ایران وجود دارد که زندگی در آن را ساده‌تر می‌کند.',
//   },
//   {
//     id:'fourth',
//     title:'هزینه‌های زندگی در دبی',
//     description: 'هزینه‌های زندگی مهم‌ترین دغدغه افرادی است که قصد مهاجرت و زندگی در دبی را دارند. بیشترین هزینه اقامت در دبی صرف خرید خانه می‌شود و اگر بودجه کافی در اختیار نداشته باشید، باید اجاره‌نشین شوید؛ همچنین تحصیل در دبی هم هزینه نسبتا زیادی دارد. به‌جز تحصیل و مسکن، سایر هزینه‌ها در دبی باتوجه‌به امکانات مناسب است و با یک شغل خوب قادر به تامین هزینه‌ها خواهید بود.'
//   }
// ]
interface IDataBlog {
  text?:string;
  title?:string;
  images?:string[];
  created_at?:string
}
const dataBlog = ref<IDataBlog>()
async function getData (){
  loadingDataBlog.value = true
  let url = getUrl(`/blog/${route.params.id}`)
  try {
    console.log(url)
    const {status,data,message} = await fetchData({
      url:url,
      method:'GET'
    })
    if (status == 200){
      dataBlog.value = data
    }
  }catch (err:any){
    showErrorToast(err)
  }finally {
    loadingDataBlog.value = false
  }
}
const showImage = computed(() => {
  if (dataBlog?.value?.images?.length) {
    return addBackendToImageUrl(dataBlog?.value?.images[0]); // تصویر بک‌اند
  } else {
    return image_placeholder; // تصویر پیش‌فرض
  }
});
onMounted(async ()=>{
  await getData()
})
</script>