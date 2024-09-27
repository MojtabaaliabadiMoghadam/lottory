<template>
  <div>
    <login-section-info-login-section/>
    <RegisterCostIndex/>
    <box-information-index/>
    <FQIndex>
      <template #title-box>
        <span class="font-bold text-[28px] text-[#038831]">سوالات متداول لاتاری گرین کارت آمریکا</span>
        <span class="text-[20px] text-start flex flex-col gap-5">
                    <span class="font-light">
                      از آنجاییکه هر مرحله از لاتاری گرین کارت امریکا (از ثبت نام لاتاری گرفته تا انجام امور برندگان لاتاری) از حساسیت بالایی برخوردار است، افراد معمولا با سوالات بسیاری در زمینه لاتاری مواجه خواهند شد، لذا در این بخش از سایت
                    <span class="text-[#038831] font-bold cursor-pointer">آینده سبز</span>
                       اختصاصاً به سوالات متداول لاتاری گرین کارت آمریکا پرداخته ایم
                    </span>
                    <span class="text-[16px] text-gray-400 font-light">
                      برای مشاهده پاسخ هر سوال روی سوال مورد نظر ضربه بزنید
                    </span>
                  </span>
      </template>
    </FQIndex>
  </div>
</template>
<script setup lang="ts">
import FQIndex from "~/components/FQLists/FQIndex.vue";
import BoxInformationIndex from "~/components/BoxInformation/BoxInformationIndex.vue";
</script>