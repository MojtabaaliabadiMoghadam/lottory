<template>
<register-layout-register>
  <div class="flex flex-col w-full items-center justify-center">
    <register-marriage/>
  </div>
</register-layout-register>
</template>
<script setup lang="ts">
import {useDataRegister} from "~/stores/dataRegisterStore";

const store = useDataRegister()
</script>