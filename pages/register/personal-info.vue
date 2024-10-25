<template>
  <register-layout-register>
    <register-form-info-personal />
  </register-layout-register>
</template>
<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import placeHolderImage from '@/assets/images/placeholderimage.webp'
import {useDataRegister} from "~/stores/dataRegisterStore";

</script>
<style>
.p-datepicker-panel {
  direction: ltr !important;
}
</style>