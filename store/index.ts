import { defineStore } from 'pinia'
import { action as actionIndex } from '@/constants/store/actions'
import { CLASSNAME_PAGE_REFRESHING } from '~/constants/type/className-variables'
import type { IGlobel, Widget, Menu, Data as WidgetData } from '@/models/api/global'
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

interface ITypeList {
    type: string
    code: string
    dataType: string
}

const defaultState = {
    isPageFinishedBeforeEnd: false,
    isPageTransitionFinished: false,
    isOpenTransitionFinished: false,
    isSiteOpenAnimationDone: false, // 開場動畫結束
    isLocomotiveScrollDone: false, // 第三方smooth scroll載入完成
    isSamePathExcludeLocale: true,
    PageFinishedBeforeEndProgress: 0.5, // + 0.5 progress after the start of the tlClose(in ~/plugins/route.ts) animation
    pageLoading: false,
    isPageFocus: true,
    isPagePosTop: false,
    pageKey: new Date().getTime(),
    isYtApiDone: false,
}
const defaultGetters = {
    /**
     * 頁面載入結束 && 開場動畫結束
     * @param state
     * @returns
     */
    isPageOpenDoneAfter: (state) => {
        const r = state.isPageTransitionFinished && state.isSiteOpenAnimationDone
        return r
    },
}
export const useGlobalStore = defineStore('global', {
    state: () => ({
        ...defaultState,
        global: null as IGlobel | null,
        userName: 'Steven',
        timeNow: 0,
        widgetsTypeList: [] as ITypeList[],
    }),
    getters: {
        ...defaultGetters,
        enums: (state) => state.global?.enums ?? null,
        widgets: (state): Widget[] => state.global?.widgets ?? [],

        headerNavBar() {
            const _this = this
            const type = 'nav-bar'
            const code = 'nav-bar'
            const r = _this.widgets.filter((x) => x.type === type && x.code === code) as Widget[]
            return r && r.length > 0 ? r[0] : null
        },
        footerBar() {
            const _this = this
            const type = 'footer-bar'
            const code = 'footer-bar'
            const r = _this.widgets.filter((x) => x.type === type && x.code === code) as Widget[]
            return r && r.length > 0 ? r[0] : null
        },
        headerNav() {
            const _this = this
            let menu: Menu[] = []
            if (_this.headerNavBar) {
                menu = _this.headerNavBar.data.menu ?? []
            }
            return menu
        },
        footerOtherNav() {
            const _this = this
            const { $getApiTMsg } = useNuxtApp()
            type TData = Pick<WidgetData, 'top'>
            const data: TData | undefined = _this.footerBar?.data
            const menu = data?.top?.menu ?? []

            type TR = {
                name: string
                path: string
            }
            // let r = [
            //     [
            //         {
            //             name: 'HK7S',
            //             path: '/',
            //         },
            //         {
            //             name: 'CONTACT US',
            //             path: '/',
            //         },
            //         {
            //             name: 'NEWS',
            //             path: '/',
            //         },
            //     ],
            //     [
            //         {
            //             name: 'DOWNLOADS AND RESOURCES',
            //             path: '/',
            //         },
            //         {
            //             name: 'CAREER OPPORTUNITIES',
            //             path: '/',
            //         },
            //         {
            //             name: 'ABOUT HKCR',
            //             path: '/',
            //         },
            //     ],
            // ]

            let r: TR[] = menu.map((x) => {
                const name = $getApiTMsg(x.title)
                const path = x.url
                return { name, path }
            })
            let s = [] as TR[][]
            if (r.length > 3) {
                s = [r.slice(0, 3), r.slice(3)]
            } else s = [r]

            return s
        },
        footerPrivacyNav() {
            const _this = this
            const { $getApiTMsg } = useNuxtApp()
            type TData = Pick<WidgetData, 'bottom'>
            const data: TData | undefined = _this.footerBar?.data
            const terms_of_use_text = $getApiTMsg(data?.bottom?.terms_of_use_text)
            const privacy_policy_text = $getApiTMsg(data?.bottom?.privacy_policy_text)

            const r = [
                {
                    name: terms_of_use_text,
                    path: '/privacy/terms-of-service',
                },
                {
                    name: privacy_policy_text,
                    path: '/privacy/privacy-policy',
                },
            ]
            return r
        },
        footerMedias() {
            const _this = this
            type TData = Pick<WidgetData, 'middle'>
            const data: TData | undefined = _this.footerBar?.data
            const linkedin = data?.middle?.connections.platforms.linkedin ?? ''
            const instagram = data?.middle?.connections.platforms.instagram ?? ''
            const facebook = data?.middle?.connections.platforms.facebook ?? ''
            const youtube = data?.middle?.connections.platforms.youtube ?? ''

            type TR = {
                name: string
                path: string
                icon: string
            }
            const r = [
                {
                    name: 'linkedin',
                    path: linkedin,
                    icon: 'ds-ico-linkedin-filled',
                },
                {
                    name: 'instagram',
                    path: instagram,
                    icon: 'ds-ico-ig-filled',
                },
                {
                    name: 'facebook',
                    path: facebook,
                    icon: 'ds-ico-fb-filled',
                },
                {
                    name: 'touyube',
                    path: youtube,
                    icon: 'ds-ico-youtube-filled',
                },
            ] as TR[]
            return r
        },
        otherLanguages() {
            const { otherLocales } = useLocale()
            const _this = this
            if (_this.headerNavBar) {
                const languages = _this.headerNavBar.data.languages ?? []
                const r: LocaleObject[] = otherLocales.value.map((x) => {
                    const targetLocale = languages.filter((y) => y.code === x.code) || []
                    const nameInApi = targetLocale.length > 0 ? targetLocale[0].name : x.name
                    return {
                        ...x,
                        nameInApi,
                    }
                })
                return r
            } else return [] as LocaleObject[]
        },
    },
    actions: {
        [actionIndex.SET_PAGE_REFRESHING](value: boolean) {
            const self = this
            self.pageLoading = value
            if (typeof window !== 'undefined') {
                const className = CLASSNAME_PAGE_REFRESHING
                if (value) document.body.classList.add(className)
                else document.body.classList.remove(className)
            }
        },
        [actionIndex.SET_PAGE_FINISHED_BEFROE_END](value: boolean) {
            const self = this
            self.isPageFinishedBeforeEnd = value
        },
        [actionIndex.SET_PAGE_TRANSITION_FINISHED](value: boolean) {
            const self = this
            self.isPageTransitionFinished = value
        },
        [actionIndex.SET_SITE_OPEN_ANIMATION_DONE](value: boolean) {
            const self = this
            self.isSiteOpenAnimationDone = value
        },
        [actionIndex.SET_LOCOMOTIVESCROLL_DONE](value: boolean) {
            const self = this
            self.isLocomotiveScrollDone = value
        },
        [actionIndex.SET_YTAPI_DONE](value) {
            const self = this as any
            self.isYtApiDone = value
        },
    },
})
