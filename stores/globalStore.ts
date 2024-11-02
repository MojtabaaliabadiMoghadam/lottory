import { defineStore } from 'pinia'
export const useDataGlobal = defineStore('data', () => {
    const dataFactorNotPayment = ref([])
    return {
        dataFactorNotPayment
    }
})