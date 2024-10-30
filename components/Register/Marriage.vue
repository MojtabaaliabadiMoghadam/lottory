<template>
  <div class="flex flex-col w-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <span class="text-[20px] font-bold text-theme-primary-950 py-5">
        وضعیت تاهل خود را مشخص کنید :
       </span>
      <div class="flex items-center justify-center py-4 w-full gap-5">
        <ui-kit-base-button @click-on="store.isMarried = 0" :active="store.isMarried == 0"
                            class-button="md:!px-20 px-12" label="مجرد"/>
        <ui-kit-base-button @click-on="store.isMarried = 1" :active="store.isMarried == 1"
                            class-button="md:!px-20 px-12" label="متاهل"/>
      </div>
    </div>
    <Transition mode="out-in">
      <div v-if="store.isMarried == 0" class="flex flex-col items-center justify-center">
      <span class="text-[20px] font-bold text-theme-primary-950 py-5">
        نوع تجرد خود را مشخص کنید :
       </span>
        <div class="flex md:flex-row flex-col items-center justify-center py-4 gap-3 w-full">
          <ui-kit-base-button @click-on="store.kindNotMarried = 'not-married'"
                              :active="store.kindNotMarried == 'not-married'" class-button="md:!px-20 w-full"
                              label="ازدواج نکرده"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'absolute'" :active="store.kindNotMarried == 'absolute'"
                              class-button="md:!px-20  w-full" label="مطلقه"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'deceased-wife'"
                              :active="store.kindNotMarried == 'deceased-wife'" class-button="md:!px-20  w-full"
                              label="همسر فوت شده"/>
          <ui-kit-base-button @click-on="store.kindNotMarried = 'separation'"
                              :active="store.kindNotMarried == 'separation'" class-button="md:!px-20  w-full"
                              label="در حال جدایی"/>
        </div>
      </div>
      <div v-else>
        <div v-if="store.isMarried == 1" class="flex flex-col items-center justify-center">
          <span class="text-[20px] font-bold text-theme-primary-950 py-5">
            نوع شهروندی  همسر خود را مشخص کنید :
           </span>
          <div class="flex md:flex-row flex-col items-center justify-center py-4 gap-3 w-full">
            <ui-kit-base-button @click-on="store.kindMarried = 'not-american-citizen'"
                                :active="store.kindMarried == 'not-american-citizen'" class-button="md:!px-20 w-full"
                                label="شهروند غیر آمریکایی"/>
            <ui-kit-base-button @click-on="store.kindMarried = 'american-citizen'"
                                :active="store.kindMarried == 'american-citizen'"
                                class-button="md:!px-20  w-full" label="شهروند آمریکایی"/>
          </div>
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="showButtonFooterComputed"
           class="flex flex-col items-center justify-center">
          <span class="text-[20px] font-bold text-theme-primary-950 pt-5 pb-2">
           تعداد فرزند تحت سرپرستی زیر 21 سال:
          </span>
        <ui-kit-base-select :label="label" :options="options"
                            v-model="store.formData.children_count" fullWidth/>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const store = useDataRegister()
const label = ref('تعداد فرزندان خود را مشخص کنید:');
const options = ref([
  {label: '0', value: 0},
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
]);

const showButtonFooterComputed = computed(()=>{
  if (store.formData.married_status != null){
    if (store.formData.married_status){
      return  true
    }else{
      if( store.kindNotMarried != 'not-married'){
        return  true
      }else{
        return false
      }
    }
  }else{
    return false
  }
})
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