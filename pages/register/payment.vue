<template>
  <register-layout-register>
    <div class="flex flex-col w-full gap-4 items-center justify-center">
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">پرداخت هزینه ثبت نام : </span>
      <span class="md:text-[20px] text-[14px] font-bold text-theme-primary-950 py-3">در صورت عدم پرداخت شفارش شما نهایی نمی شود ! </span>
      <div class="flex flex-col  md:w-full md:px-[36rem] gap-8">
        <div class="w-full flex items-center justify-center">
         <ui-kit-base-table
             :headers="headers"
             :tableData="tableData"
         />
        </div>
      </div>
    </div>
  </register-layout-register>
</template>
<script setup lang="ts">
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import {useDataRegister} from "~/stores/dataRegisterStore";
const {getJalaliOptions} = useHelpers()
const store = useDataRegister()
const headers = ref([
  { key: 'subject', name: 'موضوع' },
  { key: 'cost', name: 'هزینه' },
  { key: 'quantity', name: 'تعداد' },
  { key: 'total', name: 'جمع' },
]);

const tableData = ref([
  {
    subject: 'خدمات اینده سبز: بزرگسال',
    cost: '۳۴۰,۰۰۰ تومان',
    quantity: '۱',
    total: '۳۴۰,۰۰۰ تومان',
  },
]);

</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>