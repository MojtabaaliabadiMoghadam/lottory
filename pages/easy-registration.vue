<template>
  <div class="pt-8">
    <div v-if="isLoading" class="flex items-center justify-center">
      <div role="status">
        <svg aria-hidden="true" class="w-12 h-12 text-theme-primary-100 animate-spin fill-theme-primary-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else class="flex gap-8 flex-col items-center justify-center">
      <span class="text-[16px] font-bold text-theme-primary-900">فرصت مانده تا پایان ثبت نام لاتاری</span>
      <div class="flex items-start justify-center w-full gap-1">
        <div class="timer w-16">
          <div>
            <h3 class="countdown-element font-manrope font-semibold text-2xl text-theme-primary-900 text-center">{{ seconds }}</h3>
          </div>
          <p class="text-sm font-normal text-theme-primary-900 mt-1 text-center w-full">ثانیه</p>
        </div>
        <h3 class="font-manrope font-semibold text-2xl text-theme-primary-900">:</h3>
        <div class="timer w-16">
          <div>
            <h3 class="countdown-element font-manrope font-semibold text-2xl text-theme-primary-900 text-center">{{ minutes }}</h3>
          </div>
          <p class="text-sm font-normal text-theme-primary-900 mt-1 text-center w-full">دقیقه</p>
        </div>
        <h3 class="font-manrope font-semibold text-2xl text-theme-primary-900">:</h3>
        <div class="timer w-16">
          <div>
            <h3 class="countdown-element font-manrope font-semibold text-2xl text-theme-primary-900 text-center">{{ hours }}</h3>
          </div>
          <p class="text-sm font-normal text-theme-primary-900 mt-1 text-center w-full">ساعت</p>
        </div>
        <h3 class="font-manrope font-semibold text-2xl text-theme-primary-900">:</h3>
        <div class="timer w-16">
          <div>
            <h3 class="countdown-element font-manrope font-semibold text-2xl text-theme-primary-900 text-center">{{ days }}</h3>
          </div>
          <p class="text-sm font-normal text-theme-primary-900 mt-1 text-center w-full">روز</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center text-center px-6 justify-center">
        <span class="text-[16px] font-bold text-theme-primary-900 leading-9">همین حالا شماره تماس خودتو ثبت کن تا ثبت نام بزرگ لاتاری جا نمونی</span>
      </div>
      <div class="w-full flex flex-col items-center justify-center px-4">
        <div class="w-full flex flex-col gap-5 items-center justify-center rounded-2xl py-4 px-8 bg-theme-primary-700/80">
          <span class="text-white font-bold tracking-wider">
            شماره موبالیتو وارد کن
          </span>
          <div class="w-full">
            <input type="number" class="border-2 w-full border-theme-primary-500 focus:border-theme-primary-700
                focus-visible:outline-none rounded-xl h-[48px] px-3">
          </div>
          <button class="bg-theme-primary-900 border-2 border-theme-primary-300 md:hover:bg-theme-primary-500 font-bold
           w-[280px] h-[48px] text-white text-[20px] rounded-xl mb-5 mx-10 mt-3"
          @click="sendData"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const customDays = 10;
const COUNTDOWN_KEY = 'countdown-dest';

// Reactive refs for countdown values
const days = ref<string>('00');
const hours = ref<string>('00');
const minutes = ref<string>('00');
const seconds = ref<string>('00');
const isLoading = ref<boolean>(true); // Loading state

let interval: number;

const calculateDestination = () => {
  const storedDest = localStorage.getItem(COUNTDOWN_KEY);

  if (storedDest) {
    return parseInt(storedDest); // Use stored destination if available
  } else {
    const newDest = new Date().getTime() + customDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(COUNTDOWN_KEY, newDest.toString());
    return newDest;
  }
};

const startCountdown = () => {
  const dest = calculateDestination();

  interval = setInterval(() => {
    const now = new Date().getTime();
    const diff = dest - now;

    if (diff <= 0) {
      clearInterval(interval);
      localStorage.removeItem(COUNTDOWN_KEY); // Clear localStorage after countdown ends
      return;
    }

    // Calculate time components
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update refs
    days.value = d < 10 ? `0${d}` : `${d}`;
    hours.value = h < 10 ? `0${h}` : `${h}`;
    minutes.value = m < 10 ? `0${m}` : `${m}`;
    seconds.value = s < 10 ? `0${s}` : `${s}`;
  }, 1000);
};

function sendData(){

}

onMounted(() => {
  // Simulate loading (you can remove this timeout in real-world cases)
  setTimeout(() => {
    isLoading.value = false; // Set loading to false when ready
    startCountdown();
  }, 1500); // Delay for 1.5 seconds to simulate loading
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
/* Optional: You can add styles for the loading message or spinner */
</style>
