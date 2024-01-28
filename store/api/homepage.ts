import { defineStore } from 'pinia'
import type { IPage } from '@/models/api/page'

export const useApiHomePageStore = defineStore('apiHomepage', {
    // 對應 data
    state: () => ({
        data: null as IPage | undefined | null,
    }),
    // 對應 computed (物件形式)
    getters: {},
    // 對應 methods (物件形式)
    actions: {},
})
