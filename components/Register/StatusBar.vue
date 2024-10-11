<template>
  <div class="flex items-center gap-3 w-full justify-center md:pt-10 pt-2">
    <nav dir="rtl" class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-8 rtl:space-x-reverse">
        <li v-for="(tab,index) in store.dataStatusBar" :key="index">
          <div class="flex items-center">
            <svg v-if="index > 0" class="rtl:rotate-180 w-3 h-3 text-theme-primary-900 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <button :class="{'!text-theme-primary-950 !font-bold' : tab.key == route.path}" class="ms-1 md:text-xl  text-lg font-medium transition-all duration-200
            ease-in text-white hover:text-theme-primary-950 md:ms-2">
              {{tab.text}}
            </button>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";
const route = useRoute()
interface IData {
  active?:boolean,
  text?:string
}

interface IPropsData {
  data?:IData
}

const props = defineProps<IPropsData>()

const store = useDataRegister()

</script>