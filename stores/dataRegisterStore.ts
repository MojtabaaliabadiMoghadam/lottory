import { defineStore } from 'pinia'
export const useDataRegister = defineStore('dataRegister', () => {
    const dataStatusBar = ref([
        {text:'شروع',key:'/register/start'},
        {text:'فرم',key:'/register/personal-info'},
        {text:'احراز',key:'/register/verification'},
        {text:'پرداخت',key:'/register/payment'},
        {text:'تکمیل',key:'/register/completion'}
    ])
    const is_married = ref<number|null>(null)
    const kindNotMarried = ref<'not-married' | 'absolute' | 'deceased-wife' | 'separation'>('not-married');
    const kindMarried = ref<'american-citizen' | 'not-american-citizen'>('not-american-citizen');
    const step = ref<string>('')
    const childUserInNotMarried = ref<number>()
    const childUserInMarried = ref<number>()
    return {
        dataStatusBar,
        is_married,
        kindNotMarried,
        step,
        childUserInNotMarried,
        kindMarried,
        childUserInMarried
    }
})