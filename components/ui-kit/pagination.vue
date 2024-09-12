<template>
  <div class="flex items-center md:justify-start justify-center w-full pt-20 pb-10">
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-green-300
               hover:bg-green-200 transition-all duration-200 ease-in focus:z-20 focus:outline-offset-0 disabled:bg-green-200 disabled:cursor-no-drop"
          >
            <span class="sr-only">prev</span>
            <span class="mdi mdi-chevron-right"></span>
          </button>
          <button
              v-for="page in pages"
              :key="page"
              @click="goToPage(page)"
              :class="['relative inline-flex items-center px-4 py-2 text-sm font-semibold', { 'bg-green-600 text-white': currentPage === page,
              'text-green-700 ring-1 ring-inset ring-green-300 hover:bg-green-200 transition-all duration-200 ease-in': currentPage !== page }]"
          >
            {{ page }}
          </button>
          <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="relative inline-flex items-center rounded-l-md px-3 py-2 text-green-400 ring-1 ring-inset ring-green-300
               hover:bg-green-200 transition-all duration-200 ease-in focus:z-20 focus:outline-offset-0 disabled:bg-green-200 disabled:cursor-no-drop"
          >
            <span class="sr-only">next</span>
            <span class="mdi mdi-chevron-left"></span>
          </button>
        </nav>
      </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  total: Number,
  current: Number
});

const emit = defineEmits(['update']);

const currentPage = computed(()=>{
  return props?.current
});

const totalPages = computed(() => Math.ceil(props?.total / 10)); // assuming 10 items per page

const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});



const goToPage = (page) => {
  currentPage.value = page;
  emit('update', page);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    let pageCurrent = currentPage.value
    pageCurrent--;
    emit('update', pageCurrent);
  }
};
const nextPage = () => {
  let pageCurrent = currentPage.value
  if (pageCurrent < totalPages.value) {
    pageCurrent ++
    emit('update', pageCurrent);
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
