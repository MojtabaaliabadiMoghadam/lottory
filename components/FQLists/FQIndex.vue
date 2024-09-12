<template>
    <div class="bg-[#efefef] px-6 md:px-0 py-10">
      <div class="mx-auto md:max-w-5xl">
        <div class="flex flex-col gap-5 items-start mb-10">
                  <span class="font-bold text-[28px] text-[#038831]">سوالات متداول لاتاری گرین کارت آمریکا</span>
                  <span class="text-[20px] text-start flex flex-col gap-5">
                    <span class="font-light">
                      از آنجاییکه هر مرحله از لاتاری گرین کارت امریکا (از ثبت نام لاتاری گرفته تا انجام امور برندگان لاتاری) از حساسیت بالایی برخوردار است، افراد معمولا با سوالات بسیاری در زمینه لاتاری مواجه خواهند شد، لذا در این بخش از سایت
                    <span class="text-[#038831] font-bold cursor-pointer">کارت سبز</span>
                       اختصاصاً به سوالات متداول لاتاری گرین کارت آمریکا پرداخته ایم
                    </span>
                    <span class="text-[16px] text-gray-400 font-light">
                      برای مشاهده پاسخ هر سوال روی سوال مورد نظر ضربه بزنید
                    </span>
                  </span>
        </div>
        <div v-for="(question , index) in questions" :key="index"
             class="flex flex-col gap-1"
             :class="{ 'gap-0': question.expanded}"
        >
          <button
              :id="'questions-title-' + (index + 1)"
              type="button"
              class="p-2 rounded-xl font-light w-full bg-white flex items-center justify-end gap-2 cursor-pointer"
              @click="toggleAccordion(index)"
              :aria-expanded="question.expanded"
              :aria-controls="'questions-text-' + (index + 1)"
          >
              <span
                  :class="{ '': question.expanded}"
                  class=" text-black font-light text-right w-10/12 text-[16px] tracking-[0.02em]">{{ question.question }}
              </span>
              <span class="mdi mdi-24px text-gray-300"
                 :class="{
                     'mdi-plus-box-outline':!question.expanded,
                     'mdi-minus-box-outline':question.expanded
                 }">
            </span>
          </button>
          <div
              :id="'questions-text-' + (index + 1)"
              role="region"
              :aria-labelledby="'questions-title-' + (index + 1)"
              class="text-right grid bg-[#f8f8f8] text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out rounded-xl"
              :class="question.expanded ? 'mb-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="p-5 text-[16px] font-normal tracking-[0.02em] !leading-[25px]">{{ question.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
const questions = ref([
  {
    question: "گرین کارت چیست؟",
    answer: "گرین کارت یا کارت سبز امریکا یک کارت شناسایی رسمی و قانونی است که افراد با داشتن آن می‌توانند به ‌مانند یک شهروند آمریکایی در این کشور آزادانه اقامت نمایند. در واقع، فرد صاحب گرین کارت با آنکه یک شخص خارجی محسوب می‌شود ولی می‌تواند به‌طور دائم در امریکا زندگی نماید و تحت حمایت قوانین امریکا قرار گیرد",
    expanded: false
  },
  {
    question: "برنامه لاتاری گرین کارت چیست؟",
    answer: "برنامه لاتاری گرین کارت ایالات متحده یک قرعه کشی است برای دریافت گرین کارت که افراد با ثبت نام درآن، در صورت برنده شدن، می توانند گرین کارت یا همان کارت اقامت دائم را دریافت کنند. این برنامه ویزای اقامت دائم برای افرادیست که شرایط لازم را برای ثبت نام لاتاری را دارند",
    expanded: false
  },
  {
    question: "احتمال برنده شدن در لاتاری گرین کارت چگونه است؟",
    answer: "اگر چه لاتاری قرعه کشی است و پذیرش افراد به شانس آنان بستگی دارد، احتمال برنده شدن متقاضیان در لاتاری گرین کارت به کشور و محل تولد آنها نیز ارتباط دارد. از آنجاییکه لاتاری برای حفظ تنوع نژادی مهاجران در آمریکا برگزار می شود، کشورهایی که از طرق غیر لاتاری هر سال مهاجر کمتری به امریکا دارند، درصد پذیرش بیشتری از لاتاری را به خود اختصاص می دهند",
    expanded: false
  },
  {
    question: "چند نفر از متقاضیان لاتاری انتخاب می شوند؟",
    answer: "با اینکه تنها در هر سال 55 هزار ویزا برای افراد از سراسر دنیا در نظر گرفته شده است اما بیش از این تعداد به عنوان برنده لاتاری اعلام می شوند زیرا همه افراد برای باقی مراحل اقدام نمی کنند و درصد خیلی بالایی از افراد به علت نقص در پرونده و یا درج اطلاعات اشتباه به هنگام ثبت نام فاقد صلاحیت شناخته شد و از گرفتن ویزا باز می مانند.",
    expanded: false
  },
  {
    question: "فرزندان با چه سن و شرایطی می توانند زیر مجموعه والدین قرار بگیرند؟",
    answer: "فرزندان زیر 18 سال زیر مجموعه پدر و مادر هستند و در فرم ثبت نامی آنها ثبت می شود.",
    expanded: false
  },
  {
    question: "پاسپورت از کجا دریافت کنیم؟ مدارک لازم برای گرفتن پاسپورت چیست؟",
    answer: "شما می توانید از ادارات گذرنامه شهر خود نسبت به دریافت، تمدید یا تعویض پاسپورت خود اقدام نمایید. مدارک و هزینه ها هر سال تغییراتی دارند که می توانید از دفتر مورد نظر جویا شوید",
    expanded: false
  },
  {
    question: "آیا ایرانیان نیز حق شرکت در قرعه کشی لاتاری را دارند ؟",
    answer: "بله  , ایران و کشورهای همسایه آن جز پاکستان جزو کشورهایی هست که افراد متولد در آن می توانند در قرعه کشی گرین کارت آمریکا شرکت کنند.",
    expanded: false
  },
  {
    question: "چند نفر از متقاضیان لاتاری انتخاب می شوند؟",
    answer: "با اینکه تنها در هر سال 55 هزار ویزا برای افراد از سراسر دنیا در نظر گرفته شده است اما بیش از این تعداد به عنوان برنده لاتاری اعلام می شوند زیرا همه افراد برای باقی مراحل اقدام نمی کنند و درصد خیلی بالایی از افراد به علت نقص در پرونده و یا درج اطلاعات اشتباه به هنگام ثبت نام فاقد صلاحیت شناخته شد و از گرفتن ویزا باز می مانند.",
    expanded: false
  },
  {
    question: "فرزندان با چه سن و شرایطی می توانند زیر مجموعه والدین قرار بگیرند؟",
    answer: "فرزندان زیر 18 سال زیر مجموعه پدر و مادر هستند و در فرم ثبت نامی آنها ثبت می شود.",
    expanded: false
  },
  {
    question: "پاسپورت از کجا دریافت کنیم؟ مدارک لازم برای گرفتن پاسپورت چیست؟",
    answer: "شما می توانید از ادارات گذرنامه شهر خود نسبت به دریافت، تمدید یا تعویض پاسپورت خود اقدام نمایید. مدارک و هزینه ها هر سال تغییراتی دارند که می توانید از دفتر مورد نظر جویا شوید",
    expanded: false
  },
  {
    question: "آیا ایرانیان نیز حق شرکت در قرعه کشی لاتاری را دارند ؟",
    answer: "بله  , ایران و کشورهای همسایه آن جز پاکستان جزو کشورهایی هست که افراد متولد در آن می توانند در قرعه کشی گرین کارت آمریکا شرکت کنند.",
    expanded: false
  },
  {
    question: "چند نفر از متقاضیان لاتاری انتخاب می شوند؟",
    answer: "با اینکه تنها در هر سال 55 هزار ویزا برای افراد از سراسر دنیا در نظر گرفته شده است اما بیش از این تعداد به عنوان برنده لاتاری اعلام می شوند زیرا همه افراد برای باقی مراحل اقدام نمی کنند و درصد خیلی بالایی از افراد به علت نقص در پرونده و یا درج اطلاعات اشتباه به هنگام ثبت نام فاقد صلاحیت شناخته شد و از گرفتن ویزا باز می مانند.",
    expanded: false
  },
  {
    question: "فرزندان با چه سن و شرایطی می توانند زیر مجموعه والدین قرار بگیرند؟",
    answer: "فرزندان زیر 18 سال زیر مجموعه پدر و مادر هستند و در فرم ثبت نامی آنها ثبت می شود.",
    expanded: false
  },
  {
    question: "پاسپورت از کجا دریافت کنیم؟ مدارک لازم برای گرفتن پاسپورت چیست؟",
    answer: "شما می توانید از ادارات گذرنامه شهر خود نسبت به دریافت، تمدید یا تعویض پاسپورت خود اقدام نمایید. مدارک و هزینه ها هر سال تغییراتی دارند که می توانید از دفتر مورد نظر جویا شوید",
    expanded: false
  },
  {
    question: "آیا ایرانیان نیز حق شرکت در قرعه کشی لاتاری را دارند ؟",
    answer: "بله  , ایران و کشورهای همسایه آن جز پاکستان جزو کشورهایی هست که افراد متولد در آن می توانند در قرعه کشی گرین کارت آمریکا شرکت کنند.",
    expanded: false
  }
]);
const toggleAccordion = (value:number) => {
  questions.value.forEach((faq, i) => {
    if (value === i) {
      faq.expanded = !faq.expanded;
    } else {
      faq.expanded = false;
    }
  });
};
</script>
<style>
.gradient {
  /* Linear Gradient */
  background: #B2F1F5;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>