import { defineStore } from 'pinia'
export const useDataRegister = defineStore('dataRegister', () => {
    const dataStatusBar = ref([
        {text:'فرم',active:true,key:'start'},
        {text:'احراز',active:false,key:'verification'},
        {text:'پرداخت',active:false,key:'payment'},
        {text:'تکمیل',active:false,key:'completion'}
    ])
    const is_married = ref<number>()
    return {
        dataStatusBar,
        is_married
    }
})