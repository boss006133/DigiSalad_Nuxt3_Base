import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import { useGtm } from '@gtm-support/vue-gtm'
import UiBody from '@/components/ui/body.vue'
import {
    CLASSNAME_LAYOUT_SCROLL_DOWN,
    CLASSNAME_HEADER_STICKY,
    CLASSNAME_SHOW_GOTOP,
} from '~/constants/type/className-variables'
import { EHeaderTheme } from '@/constants/others/enums'
import { createVNode, render } from 'vue'

export default defineNuxtPlugin(() => {
    const error = useError()
    const nuxtApp = useNuxtApp()
    //const gtm = useGtm() // auto-imported by the module
    const { finalizePendingLocaleChange, locale } = nuxtApp.$i18n
    const storeGlobal = useGlobalStore(nuxtApp.$pinia)
    const { isSiteOpenAnimationDone, isPageFinishedBeforeEnd, isOpenTransitionFinished } =
        storeToRefs(storeGlobal)
    const router = nuxtApp.$router as any
    const { toggleWidgetsBlockComplete, widgetsBlockState } = useWidgetsBlocksEvents()
    const { open: animeOpen, close: animeClose } = useAppTransition()
    let tlOpen: gsap.core.Timeline | null
    let tlClose: gsap.core.Timeline | null
    let isFirstWidgetLoaded = false
    let pathToTemp = '',
        winLocoN,
        errorTimeout
    let disabledTransition = false
    const pageClientFinished = ref(false)

    router.beforeEach(async (to, from, next) => {
        if (process.client) {
            disabledTransition = nuxtApp.$disabledTransition(to, from)

            // 紀錄 from.name 和 to.name 是否相同 ***無論語系
            storeGlobal.isSamePathExcludeLocale = nuxtApp.$isSamePathExcludeLocale(to, from)

            // 清除全域Timeout
            clearTimeout(errorTimeout)
            window.globalTimeout.forEach((timeout) => {
                clearTimeout(timeout)
            })
            window.globalTimeout = []

            !disabledTransition && tlClose?.restart().pause()

            // 頁面過場動畫:開啟
            if (from.path !== to.path) {
                toggleWidgetsBlockComplete(false)
                storeGlobal[actionIndex.SET_PAGE_FINISHED_BEFROE_END](false)
                storeGlobal[actionIndex.SET_PAGE_TRANSITION_FINISHED](false)
                !disabledTransition && (await tlOpen?.restart())
                // 關閉nav menu popup
                nuxtApp.$Nav.close()
            }
        }
        // 過場動畫後才切換語系檔
        await finalizePendingLocaleChange()
        next()
    })
    router.afterEach(async (to, from) => {
        storeGlobal.isPagePosTop = false
        if (process.client) {
            // recreate locomotive
            document.documentElement.style.overflow = 'hidden'
            let animeTimeout = setTimeout(() => {
                nuxtApp.$createLayoutLocomotive()
                winLocoN = nuxtApp.$getWindowLoco('layout')
                document.documentElement.style.overflow = ''

                // 如果點擊同一頁route, 直接執行locomotive start
                if (
                    from.name === to.name &&
                    isOpenTransitionFinished.value &&
                    pageWidgetsClientFinish.value
                )
                    winLocoN && winLocoN.start()
            }, 100)
            window.globalTimeout.push(animeTimeout)
        }
        if (pathToTemp === to.path) {
            storeGlobal.isPagePosTop = true
            if (tlOpen?.isActive()) {
                tlOpen?.reverse().then(() => {
                    winLocoN && winLocoN.start()
                })
            }
        } else {
            pageClientFinished.value = false
        }
    })

    nuxtApp.hook('app:beforeMount', async () => {
        // insert global component to body
        let vnode_body = createVNode(UiBody)
        render(vnode_body, document.body)
    })
    nuxtApp.hook('app:mounted', async () => {
        await nextTick()
        // 初始化 page transition anime
        tlOpen = animeOpen()
        tlClose = animeClose()
    })
    nuxtApp.hook('page:finish', () => {
        let animeTimeout = setTimeout(() => {
            // 頁面置頂
            resetPosToTop()
        }, 110)
        window.globalTimeout.push(animeTimeout)

        storeGlobal[actionIndex.SET_PAGE_REFRESHING](false)
        pathToTemp = nuxtApp.$router.currentRoute.value.path

        // for every each time load finish
        pageClientFinished.value = true
    })
    nuxtApp.hook('app:error', async (err) => {
        if (process.client) {
            await nextTick()
            // 頁面置頂
            resetPosToTop()
            winLocoN && winLocoN.start()
            tlClose?.restart().play()
        }
        isFirstWidgetLoaded = true
    })
    nuxtApp.hook('app:error:cleared', async ({ redirect }) => {
        // storeGlobal[actionIndex.SET_PAGE_TRANSITION_FINISHED](true)
        // storeGlobal[actionIndex.SET_PAGE_FINISHED_BEFROE_END](true)
    })

    //#region 判斷頁面上所有widgetblock load complete  ***only pageClientFinished = true
    const pageWidgetsClientFinish = computed(
        () => widgetsBlockState.loadComplete && pageClientFinished.value,
    )
    watch(
        () => pageWidgetsClientFinish.value,
        (newValue) => {
            if (newValue) {
                let animeTimeout = setTimeout(() => {
                    // update scrollbar size
                    nuxtApp.$setScrollbarTransition()
                }, 400)
                window.globalTimeout.push(animeTimeout)

                // image lazy init
                nuxtApp.$lazyLoadImage()

                // run at client side (every time)
                if (isFirstWidgetLoaded) {
                    let isTriggerFinished = false
                    nuxtApp.$removeHtmlReady()

                    // 是否有執行app transition
                    if (!disabledTransition) {
                        // 有
                        tlClose
                            ?.eventCallback('onUpdate', function () {
                                // @ts-ignore
                                const _this = this as any
                                if (
                                    _this.progress() >= storeGlobal.PageFinishedBeforeEndProgress &&
                                    !isTriggerFinished
                                ) {
                                    isTriggerFinished = true
                                    storeGlobal[actionIndex.SET_PAGE_FINISHED_BEFROE_END](true)
                                    nuxtApp.$setHtmlReady()
                                }
                            })
                            .restart()
                            .then(() => {
                                storeGlobal[actionIndex.SET_PAGE_TRANSITION_FINISHED](true)
                            })
                    } else {
                        // 無 (目前使用在 page privacy **類似nuxt2的childpage**)
                        storeGlobal[actionIndex.SET_PAGE_FINISHED_BEFROE_END](true)
                    }
                }

                // run at server side (first time)
                isFirstWidgetLoaded = true
            }
        },
    )
    //#endregion

    // at page first load and after open animation is done (ex:keypress F5 refresh)
    watch(isSiteOpenAnimationDone, async (newValue) => {
        if (newValue && process.client) {
            await nextTick()
            winLocoN && winLocoN.start()
        }
    })

    // after router changed (client side only)
    // watch from pageWidgetsClientFinish value
    watch(isPageFinishedBeforeEnd, async (newValue) => {
        if (newValue && process.client) {
            await nextTick()
            winLocoN && winLocoN.start()
        }
    })

    // 頁面置頂
    const resetPosToTop = () => {
        nuxtApp.$scrollToElement({
            params: {
                target: 0,
                options: {
                    //lerp: false,
                    immediate: true,
                    duration: 0,
                    onComplete: () => {
                        let animeTimeout = setTimeout(() => {
                            storeGlobal.isPagePosTop = true
                        }, 100)
                        window.globalTimeout.push(animeTimeout)

                        const _html = document.documentElement
                        _html.classList.remove(
                            ...[
                                CLASSNAME_LAYOUT_SCROLL_DOWN,
                                CLASSNAME_HEADER_STICKY,
                                CLASSNAME_SHOW_GOTOP,
                            ],
                        )
                    },
                },
            },
        })
    }
})
