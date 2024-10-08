<template>
  <div class="h-full">
    <div class="md:mx-auto md:max-w-5xl">
      <div class="flex flex-col gap-3 items-center justify-center pt-5 px-4">
        <span class="text-theme-primary-950 font-bold text-[41px] select-none text-center">
          ثبت نام لاتاری
        </span>
        <span class="text-[29px] font-bold text-theme-primary-950 select-none text-center pb-6" style="word-spacing: 5px">
          ثبت نام لاتاری 1403 گرین کارت آمریکا
        </span>
        <div class="flex flex-col md:flex-row gap-12">
          <CardInfoLogin :disable-button="true" title_button="رزرو وقت سریع" title="ثبت نام سریع" :data="data_cards_2"/>
          <QuickLoginBox title=" اطلاعات خود را وارد کنید ما در اسرع وقت با شما تماس میگیریم" title_button="همین حالا ثبت نام کنید" />
          <CardInfoLogin :disable-button="true" title_button="ورود به ثبت نام" title="ثبت نام آنلاین" :data="data_cards"/>
        </div>
        <div class="my-8">
          <ShortCutLoginSection :data_shortcuts="data_shortcuts" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardInfoLogin from "~/components/LoginSection/CardInfoLogin.vue";
import QuickLoginBox from "~/components/LoginSection/QuickLoginBox.vue";
import ShortCutLoginSection from "~/components/LoginSection/ShortCutLoginSection.vue";

const data_cards = [
  {data : ' تکمیل فرم آنلاین در هر ساعت از شبانه روز'},
  {data : 'امکان تکمیل مشخصات در پنل'},
  {data : ' راهنمای تهیه عکس + ویرایش عکس'},
  {data : ' بررسی فرم توسط کارشناسان و رفع نواقص'},
  {data : ' پشتیبانی تلگرام و تلفنی در ساعات کاری'},
  {data : 'دریافت پیامک و ایمیل اطلاع رسانی'},
  {data : ' اعلام نتایج رایگان به صورت ایمیل و پیامک'},
  {data : ' خدمات کارگزاری امور برندگان'},
]
const data_cards_2 = [
  {data : '  تکمیل فرم چاپ شده'},
  {data : ' امکان تکمیل مشخصات در پنل'},
  {data : ' پرداخت با کارت خوان'},
  {data : ' ارائه شماره سفارش پنل کاربری'},
  {data : ' عکاسی و ادیت طبق الزامات در مجموعه'},
  {data : ' بررسی فرم توسط کارشناسان و رفع نواقص'},
  {data : ' پشتیبانی تلگرام و تلفنی در ساعات کاری'},
  {data : ' دریافت پیامک و ایمیل اطلاع رسانی'},
]
const data_shortcuts = [
  {title: 'مشاهده مقالات آموزشی' , description:'ورود به مجله سایت' , bg:'purple' , icon:'mdi-newspaper-variant-outline'},
  {title: 'تماس با کارشناسان' , description:'راهنمایی و پشتیبانی' , bg:'green' , icon:'mdi-account-supervisor-outline'},
  {title: 'سوالات متداول' , description:'مشاهده سوالات لاتاری' , bg:'red' , icon:'mdi-pencil-outline'}

]
</script>