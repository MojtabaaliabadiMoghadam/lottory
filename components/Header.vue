<template>
  <div class="sticky top-0 z-50">
    <nav class="bg-theme-primary-950 text-white flex items-center gap-10 xl:justify-center justify-between xl:px-0 px-4">
      <div class="flex items-center md:max-w-7xl">
        <span @click="ChangeStatusShowMenu"
              :class="[!showMenu ? 'mdi-menu' : 'mdi-close']"
              class=" xl:hidden mdi mdi-36px" />
        <div class="items-center justify-between w-full flex">
          <ul class="md:bg-theme-primary-950 gap-3 hidden font-medium xl:flex mt-0 space-x-6">
            <li v-for="(header,index) in items_headers" :key="index">
              <NuxtLink :to="header.path"
                        @click="ChangeStatusShowMenu"
                        :class="{'bg-theme-primary-500 !text-white' : route.path === header.path}"
                        class="font-bold py-2 px-3 text-white transition-all ease-in duration-200
                         hover:bg-theme-primary-500 hover:text-white
                        border-0 p-0 h-[64px] min-w-[70px] flex justify-center items-center">
                {{ header.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
<!--      <div class="flex gap-2 cursor-pointer hover:text-green-400">-->
<!--        <span class="mdi mdi-login mdi-36px"></span>-->
<!--        <span class="self-center text-[16px] font-semibold whitespace-nowrap dark:text-white">ورود</span>-->
<!--      </div>-->
    </nav>
    <Transition>
      <ul v-if="showMenu" class="xl:hidden bg-theme-primary-800/[0.8] w-full flex-col gap-3 flex font-medium
       absolute mt-0 space-x-6">
        <li v-for="(header,index) in items_headers" :key="index" class="w-full">
          <NuxtLink :to="header.path"
                    @click="ChangeStatusShowMenu"
                    :class="{'bg-theme-primary-200 !text-theme-primary-900' : route.path === header.path}"
                    class="font-bold py-2 px-3 text-white
                          border-0  min-w-[70px] flex justify-center items-center rounded-xl mx-2 mt-2">
            {{ header.title }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const items_headers = reactive([
  {path:'/' , title: 'اصلی'},
  {path:'/register' , title: 'ثبت نام لاتاری'},
  {path:'/articles' , title: 'مقالات'},
  {path:'/lottery-results' , title: 'نتایج لاتاری'},
  {path:'/frequently-asked-questions' , title: 'سوالات متداول'},
  {path:'/about-us' , title: 'درباره ما'},
  {path:'/call-us' , title: 'تماس با ما'},
])
const showMenu = ref<boolean>(false)
function ChangeStatusShowMenu(){
  showMenu.value = !showMenu.value
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@keyframes show_menu {
  0% {transform: translateY(0px);}
  100% {transform: translateY(400px);}
}
</style>

