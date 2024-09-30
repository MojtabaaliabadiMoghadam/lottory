<template>
  <div></div>
  <div v-if="isLoading" class="flex items-center justify-center h-48">
    <!-- Add your loading spinner or message here -->
    <p>Loading...</p>
  </div>

  <div v-else class="flex items-start justify-center w-full gap-4 count-down-main">
    <div class="timer w-16">
      <div>
        <h3 class="countdown-element font-manrope font-semibold text-2xl text-indigo-600 text-center">{{ days }}</h3>
      </div>
      <p class="text-sm font-normal text-gray-900 mt-1 text-center w-full">days</p>
    </div>
    <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
    <div class="timer w-16">
      <div>
        <h3 class="countdown-element font-manrope font-semibold text-2xl text-indigo-600 text-center">{{ hours }}</h3>
      </div>
      <p class="text-sm font-normal text-gray-900 mt-1 text-center w-full">hours</p>
    </div>
    <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
    <div class="timer w-16">
      <div>
        <h3 class="countdown-element font-manrope font-semibold text-2xl text-indigo-600 text-center">{{ minutes }}</h3>
      </div>
      <p class="text-sm font-normal text-gray-900 mt-1 text-center w-full">minutes</p>
    </div>
    <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
    <div class="timer w-16">
      <div>
        <h3 class="countdown-element font-manrope font-semibold text-2xl text-indigo-600 text-center">{{ seconds }}</h3>
      </div>
      <p class="text-sm font-normal text-gray-900 mt-1 text-center w-full">seconds</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const customDays = 5;
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
