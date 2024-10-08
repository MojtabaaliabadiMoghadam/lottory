<template>
  <div class="w-full grid grid-cols-12 bg-theme-primary-950 px-10 py-8">
    <div class="md:col-span-3 col-span-12 flex flex-col justify-start rounded-xl p-8">
      <span class="w-full text-center font-bold text-[16px] border-b border-white text-white mb-4 pb-4">آینده سبز</span>
      <div class="flex flex-col gap-4 w-full md:border-e h-full border-white">
        <div class="flex items-center justify-center">
          <span class="text-white font-medium hover:text-theme-primary-400 cursor-pointer transition-all ease-in duration-150"></span>
        </div>
        <div v-for="data in listOfFooter" class="flex items-center justify-center">
          <NuxtLink
              :to="{ path: data?.path}"
              class="text-white font-medium hover:text-theme-primary-400 cursor-pointer transition-all ease-in duration-150">
            {{ data.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:col-span-3 col-span-12 flex flex-col justify-start rounded-xl p-8 h-full">
      <span class="w-full text-center font-bold text-[16px] border-b border-white text-white mb-4 pb-4">راه های ارتباط با ما</span>
      <div class="flex py-2 px-4 flex-col items-center justify-between md:border-e h-full">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           class="flex focus:ring-0 focus-visible:outline-none items-center hover:ring-2 hover:ring-white
          md:hover:rounded-xl transition-all duration-150 ease-in justify-between md:pe-8 w-full">
          <img class="!h-[90px] !w-[90px] object-contain" src="@/assets/images/instagram-removebg-preview.png" alt="Instagram">
          <span class="text-white">مارا در اینستاگرام دنبال کنید</span>
        </a>
        <a href="https://t.me/ayandes" target="_blank" rel="noopener noreferrer"
           class="flex focus:ring-0 focus-visible:outline-none items-center hover:!ring-2 hover:!ring-white
          md:hover:rounded-xl transition-all duration-150 ease-in justify-between md:pe-8 !h-[90px] w-full">
          <img class="h-[70px] !w-[70px] ps-2  object-contain" src="@/assets/images/telegram2-removebg-preview.png" alt="Telegram">
          <span class="text-white">مارا در تلگرام دنبال کنید</span>
        </a>
      </div>
    </div>
    <div class="md:col-span-3 col-span-12 flex flex-col justify-start rounded-xl p-8">
      <span class="w-full text-center font-bold text-[16px] border-b border-white text-white mb-4 pb-4">خلاصه ای از اهداف ما</span>
      <div class="flex flex-col items-center justify-start px-8 md:border-e h-full">
        <span class="text-white text-[14px] text-center font-medium leading-9">
          ما در آینده سبز هدفون  اینکه با کمترین اتلاف وقت و کم ترین هزینه در لاتاری ثبت نام کنید و شانس خود را امتحان کنید.
        </span>
      </div>
    </div>
    <div class="md:col-span-3 col-span-12 flex flex-col justify-start rounded-xl p-8">
      <span class="w-full text-center font-bold text-[16px] border-b border-white text-white mb-4 pb-4">دستاورد اعتماد شما به ما</span>
      <div class="flex flex-col items-center justify-start px-8 border-e h-full">
        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=531369&Code=6WPVisvqjbci5fxUXGW9dYX1ojBis0nC'>
          <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=531369&Code=6WPVisvqjbci5fxUXGW9dYX1ojBis0nC'
               alt='' style='cursor:pointer' code='6WPVisvqjbci5fxUXGW9dYX1ojBis0nC'></a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const listOfFooter = [
  {title:'صفحه اصلی' ,path:"/"},
  {title:'درباره ما ',path:"/about-us"},
  {title:'تماس باما ',path:"/call-us"},
  {title:'سوالات متداول ',path:"/frequently-asked-questions"},
  {title:'نتایج لاتاری',path:"/lottery-results"},
  {title:'مقالات ',path:"/articles"},
]
</script>
<style>


</style>