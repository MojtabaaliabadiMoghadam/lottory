<template>
  <div class="bg-white pb-20">
    <div class="mx-auto md:max-w-5xl">
    <div class="flex flex-col items-center">
      <span class="text-black text-[34px] py-10 font-medium">
        هزینه ثبت نام لاتاری
      </span>
      <div class="flex gap-6 flex-col md:flex-row">
        <BoxRegisterCost :data_card="data_card_1"/>
        <BoxRegisterCost :data_card="data_card_2" />
      </div>
      <BoxNotification/>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BoxRegisterCost from "~/components/RegisterCost/BoxRegisterCost.vue";
import BoxNotification from "~/components/RegisterCost/BoxNotification.vue";

const data_card_1 = {
  title:'پذیرش افراد متاهل',
  icon:'mdi-login-variant',
  data_bottom:[
    {text: 'هزینه ثبت نام متاهل تک شانسه 300 هزار تومن'},
    {text: 'هزینه ثبت نام متاهل دو شانسه 420 هزار تومن'},
    {text: 'هزینه ثبت نام هر فرزند 50 هزار تومن'}
  ]
}
const data_card_2 = {
  title:'پذیرش غیرحضوری',
  icon:' mdi-account-check',
  data_bottom:[
    {text: 'بزرگسال  مجرد هر نفر: 200 هزار تومان'},
  ]

}
</script>