<template>
  <div class="flex flex-col w-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <span class="text-[20px] font-bold text-theme-primary-950 py-5">
        وضعیت تاهل خود را مشخص کنید :
       </span>
      <div class="flex items-center justify-center py-4 w-full gap-5">
        <ui-kit-base-button @click-on="store.is_married = 0" :active="store.is_married == 0"
                            class-button="md:!px-20 px-12" label="مجرد"/>
        <ui-kit-base-button @click-on="store.is_married = 1" :active="store.is_married == 1"
                            class-button="md:!px-20 px-12" label="متاهل"/>
      </div>
    </div>
    <Transition>
      <div v-if="store.is_married == 0" class="flex flex-col items-center justify-center">
          <span class="text-[20px] font-bold text-theme-primary-950 pt-5 pb-2">
           نوع مجرد بودن خود را مشخص کنید :
          </span>
        <div class="flex items-center justify-center py-4 w-full gap-3" >
          <ui-kit-base-button @click-on="store.kindNotMarried = 'not-married'"
                              :active="store.kindNotMarried == 'not-married'" class-button="md:!px-20 px-12"
                              label="ازدواج نکرده"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'absolute'" :active="store.kindNotMarried == 'absolute'"
                              class-button="md:!px-20 px-12" label="مطلقه"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'deceased-wife'"
                              :active="store.kindNotMarried == 'deceased-wife'" class-button="md:!px-20 px-12"
                              label="همسر فوت شده"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'separation'"
                              :active="store.kindNotMarried == 'separation'" class-button="md:!px-20 px-12"
                              label="در حال جدایی"/>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const store = useDataRegister()
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
</style>