import { defineStore } from 'pinia'
import { action as actionIndex } from '@/constants/store/actions'
import { CLASSNAME_PAGE_BLOCKING } from '~/constants/type/className-variables'

const defaultState = {
    pageLoading: false,
    pageKey: new Date().getTime(),
}
export const useGlobalStore = defineStore('global', {
    state: () => ({
        ...defaultState,
        global: null as any | null,
        userName: 'Steven',
        timeNow: 0,
    }),
    getters: {
        header: (state) => state.global?.header ?? [],
        footer: (state) => state.global?.footer ?? [],
        socialMedia: (state) => state.global?.social_media ?? [],
        search: (state) => state.global?.search ?? {},
    },
    actions: {
        async nuxtServerInit() {
            const self = this
            if (process.client) self.pageLoading = true

            const { data } = await useApiFetch('global/global')
            self.global = data.value?.data ?? {}

            const now = new Date()
            self.timeNow = now.getTime()

            if (process.client) self.pageLoading = false
        },
        [actionIndex.SET_PAGELOADING](value: boolean) {
            const self = this
            self.pageLoading = value
            if (typeof window !== 'undefined') {
                const className = CLASSNAME_PAGE_BLOCKING
                if (value) document.body.classList.add(className)
                else document.body.classList.remove(className)
            }
        },
    },
})
