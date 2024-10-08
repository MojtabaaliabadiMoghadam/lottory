<template>
  <div class=" px-6 md:px-0">
    <div class="mx-auto md:max-w-5xl">
      <div class="flex flex-col gap-16 py-10">
        <span class="text-[34px] font-bold text-theme-primary-950 text-center">همه چیز درباره ثبت نام لاتاری</span>
        <div class="flex gap-4 flex-col">
          <template v-for="(data , index) in box_data_information" :key="index">
            <BoxInfo :data_info="data"/>
          </template>
        </div>
        <BoxNotif @clickOnButton="router.push('/frequently-asked-questions')" :data_notification="data_notifications"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BoxInfo from "~/components/BoxInformation/BoxInfo.vue";
import BoxNotif from "~/components/Helpers/BoxNotif.vue";

const router = useRouter()

const box_data_information = [
  {
    question: 'ثبت نام لاتاری افراد مجرد تک شانسه',
    answer: 'افراد مجرد بالای 18 سال می توانند به صورت مستقل در لاتاری ثبت نام کنند و شانس خود را برای گرفتن گرین کارت آمریکا امتحان کنند. (لازم به ذکر است، افراد مجردی که هنوز به طور رسمی ازدواج نکرده اند، حتما باید به تنهایی و به صورت مستقل در لاتاری ثبت نام کنند)'
  },
  {
    question:'ثبت نام لاتاری افراد متاهل و خانواده',
    answer:'افراد متاهل می بایست حتما به همراه همسر و فرزندان مجرد زیر 21 سال خود در لاتاری ثبت نام کنند. در غیر اینصورت شانس خود برای گرفتن ویزای آمریکا را از دست می دهند'
  },
  {
    question:'ثبت نام لاتاری دو شانسه چیست ؟',
    answer:'افراد متاهل می توانند به صورت دو شانسه در لاتاری ثبت نام کنند. یعنی یک بار آقا به عنوان نفر اصلی و باقی اعضای خانواده زیر مجموعه قرار گیرند و یک بار بالعکس'
  },
  {
    question:'ثبت نام لاتاری سه شانسه چیست ؟',
    answer:'افراد مجرد بین 18 تا 21 سال علاوه بر آنکه امکان ثبت نام مستقل را دارند، باید زیر مجموعه والدین نیز ثبت نام شوند. در .این صورت این افراد از سه شانس برای برنده شدن برخوردارند'
  },
  {
    question:'مدرک تحصیلی در ثبت نام لاتاری',
    answer:'هر فرد با مدرک تحصیلی حداقل دیپلم و بدون دانستن زبان انگلیسی می تواند در لاتاری ثبت نام و گرین کارت آمریکا را از آن خود کند. (لازم به ذکر است افراد زیر دیپلم با داشتن دو سال سابقه کار تخصصی قابل استناد در 5 سال گذشته امکان ثبت نام دارند)'
  },
  {
    question:'شرایط سنی شرکت در لاتاری',
    answer:'همه افراد با هر سنی امکان شرکت در لاتاری را دارند اما افراد زیر 18 سال معمولا به دلیل نداشتن مدرک تحصیلی دیپلم یا 2 سال سابقه کار تخصصی قابل استناد، حتی در صورت برنده شدن در لاتاری، امکان گرفتن گرین کارت و ویزای آمریکا را ندارند'
  }
]
const data_notifications = {
  title:'سوالات متداول گرین کارت آمریکا',
  button_text:'مشاهده سوالات متداول'
}
</script>