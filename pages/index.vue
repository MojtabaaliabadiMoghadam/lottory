<template>
  <div>
    <InfoLoginSection/>
    <RegisterCostIndex/>
    <BoxInformationIndex/>
    <FQIndex/>
  </div>
</template>
<script setup lang="ts">
import InfoLoginSection from "~/components/LoginSection/InfoLoginSection.vue";
import BoxInformationIndex from "~/components/BoxInformation/BoxInformationIndex.vue";
import FQIndex from "~/components/FQLists/FQIndex.vue";
import { useApi } from '~/composables/useFetch';
const { get } = useApi();
const data = ref()
const error = ref()
const fetchData = async () => {
  try {
    data.value = await get('/api/blog');
  } catch (err: any) {
    error.value = err.message;
  }
};

onMounted(fetchData);
</script>