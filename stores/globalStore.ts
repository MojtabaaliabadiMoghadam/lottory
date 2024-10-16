import { defineStore } from 'pinia'
export const useDataGlobal = defineStore('data', () => {
    const searchFieldInArticle = ref<string>('')
    return {
        searchFieldInArticle
    }
})