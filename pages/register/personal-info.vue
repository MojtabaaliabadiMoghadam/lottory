<template>
  <register-layout-register>
    <div class="flex flex-col gap-y-12">
      <register-form-info-personal />
      <register-form-info-wife v-if="store.formData.married_status != 0" />
      <register-form-childs-info v-if="store.formData.children_count.value" />
    </div>
  </register-layout-register>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";
const store = useDataRegister()
</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>