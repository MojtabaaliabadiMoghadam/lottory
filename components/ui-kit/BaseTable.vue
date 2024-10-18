<template>
  <div class="relative overflow-x-auto w-full">
    <table class="w-full text-sm text-center rtl:text-right text-gray-800 border">
      <thead class="bg-theme-primary-700 text-white">
      <tr>
        <th
            v-for="header in headers"
            :key="header.key"
            class="px-6 py-3"
        >
          {{ header.name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(item, index) in tableData"
          :key="index"
          class="bg-white border dark:bg-gray-100"
      >
        <td
            v-for="header in headers"
            :key="header.key"
            class="px-6 py-4"
        >
          {{ item[header.key] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Header {
  key: string;
  name: string;
}

interface TableRow {
  [key: string]: any;
}

const props = defineProps<{
  headers: Header[];
  tableData: TableRow[];
}>();
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
