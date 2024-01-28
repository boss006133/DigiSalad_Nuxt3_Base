import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import {
    CLASSNAME_HEADER_DARK,
    CLASSNAME_NUXT_LAZY_LOADED,
    CLASSNAME_NUXT_LAZY_FAIL,
    CLASSNAME_IS_READY,
} from '@/constants/type/className-variables'
import { EHeaderTheme } from '@/constants/others/enums'

// https://scroll.locomotive.ca/docs/#/methods?id=scrolltotarget-options
interface ScrollToElementOptionsParams {
    offset?: number
    lerp?: boolean
    duration?: number
    immediate?: boolean
    lock?: boolean
    force?: boolean
    onComplete?: Function
    easing?: Array<number>
}
interface ScrollToElementParams {
    target: HTMLElement | string | number | null
    options?: ScrollToElementOptionsParams
}
interface ScrollToElement {
    key?: string
    params: ScrollToElementParams
}

type THeaderTheme = typeof EHeaderTheme.dark | typeof EHeaderTheme.light

export default defineNuxtPlugin((nuxtApp) => {
    const storeGlobal = useGlobalStore()
    const media = useMedia()
    const device = useDevice()
    const { $i18n } = useNuxtApp()
    const localePath = useLocalePath()
    const { toggleWidgetsBlockComplete } = useWidgetsBlocksEvents()
    /* 電腦版 */
    const isPc = computed(() => device.isDesktop)
    /* 行動版 */
    const isMobile = computed(() => !device.isDesktop)

    const jsRandom = (min: number, max: number): number => {
        return Math.random() * (max - min) + min
    }

    const jsRandomFloor = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    /** 解除 vue reactive 響應 */
    const deepToRaw = <T extends Record<string, any>>(sourceObj: T): T => {
        const objectIterator = (input: any): any => {
            if (Array.isArray(input)) {
                return input.map((item) => objectIterator(item))
            }
            if (isRef(input) || isReactive(input) || isProxy(input)) {
                return objectIterator(toRaw(input))
            }
            if (input && typeof input === 'object') {
                return Object.keys(input).reduce((acc, key) => {
                    acc[key as keyof typeof acc] = objectIterator(input[key])
                    return acc
                }, {} as T)
            }
            return input
        }

        return objectIterator(sourceObj)
    }

    /**
     * 取得乾淨的(移除最後斜線) route path
     * @param to
     * @returns string
     */
    const getToRealPath = (toPath) => {
        if (toPath !== '/') return toPath.replace(/\/$/, '')
        return toPath
    }

    /**
     * 取得乾淨的(不包含語系) route name
     * @param to
     * @returns string | null
     */
    const getToRealName = (toName) => {
        return typeof toName === 'string' ? toName?.split(`___${$i18n.locale.value}`)[0] : null
    }

    const setHtmlReady = () => {
        if (process.client) {
            const _html = document.documentElement
            _html?.classList.add(CLASSNAME_IS_READY)
        }
    }

    const removeHtmlReady = () => {
        if (process.client) {
            const _html = document.documentElement
            _html?.classList.remove(CLASSNAME_IS_READY)
        }
    }

    /**
     * 比對(目的route path) 和 (當前route path),如果一樣則進行page refresh
     * @param path
     */
    const refreshPage = async (path) => {
        const route = useRoute()
        const strToPath = getToRealPath(route.path)
        if (strToPath === localePath(path)) {
            toggleWidgetsBlockComplete(false)
            storeGlobal[actionIndex.SET_PAGE_REFRESHING](true)
            storeGlobal[actionIndex.SET_PAGE_FINISHED_BEFROE_END](false)
            storeGlobal[actionIndex.SET_PAGE_TRANSITION_FINISHED](false)
            storeGlobal.pageKey = await new Date().getTime()
        }
    }

    //#region cancel request
    let cancelRequests = [] as Array<any>
    /** cancel api methods*/
    const useAbort = {
        /** create cancel api id */
        signal: () => {
            let controller = new AbortController()
            const t = controller.signal

            cancelRequests.push(controller)
            return t
        },
        /** cancel api */
        abort: () => {
            cancelRequests.forEach((request: any, i) => {
                if (request.abort && typeof request.abort !== 'object') {
                    request.abort()
                }
            })
            cancelRequests = []
        },
    }
    //#endregion

    //#region scroll to element
    /**
     * scroll to element (LocomotiveScroll)
     * @param key
     * @param {ScrollToElementParams} params
     */
    const scrollToElement = ({
        key = `${nuxtApp.$locomotivePrefix}-layout`,
        params,
    }: ScrollToElement) => {
        const { target, options } = params
        if (window[key]) {
            window[key].scrollTo(target, options)
        } else {
            window.scrollTo(target as number, 0)
        }
    }
    //#endregion

    // 取得window locomotive api
    const getWindowLoco = (key: string) => {
        const winLoco = window[`${nuxtApp.$locomotivePrefix}-${key}`]
        return winLoco || null
    }

    /** 是否有使用locomotive smooth */
    const isLocoSmooth = () => {
        const winLoco = getWindowLoco('layout')
        return winLoco ? winLoco.lenisInstance.isSmooth : false
    }

    /** 至頂 */
    const goTop = (n_speed?: number) => {
        const winLoco = getWindowLoco('layout')
        let isSmooth = isLocoSmooth()

        const containerRect = document.body?.getBoundingClientRect()
        const _dur = 1.2
        let speed = 0

        const bodyHeight = isSmooth ? winLoco.lenisInstance.limit : containerRect?.height
        const windowScrollY = isSmooth ? winLoco.lenisInstance.scroll : window.scrollY

        //計算速度
        speed = (windowScrollY / bodyHeight) * _dur
        speed = Math.max(speed, 0.7)

        const immediate = typeof n_speed !== 'undefined' && n_speed <= 0
        scrollToElement({
            params: {
                target: 'top',
                options: {
                    duration: n_speed || speed,
                    immediate,
                },
            },
        })
    }

    const isSamePathExcludeLocale = (to, from): boolean => {
        if (!from.name || !to.name) return false
        const fromName = from.name.split('___')[0]
        const toName = to.name.split('___')[0]
        let r = false
        if (fromName === toName) r = true
        return r
    }

    const isSameLocale = (to, from): boolean => {
        const fromLocale = from.name.split('___')[1]
        const toLocale = to.name.split('___')[1]
        let r = false
        if (fromLocale === toLocale) r = true
        return r
    }

    /** 轉換api內所有translation */
    const getApiTMsg = (message?: IMsgTranslation[], fallbackMessage?: string) => {
        if (!message) return ''
        const fm = fallbackMessage || ''
        const locale = $i18n.locale.value
        const targetMsg = message.filter((x) => x.locale === locale)
        const r = targetMsg && targetMsg.length > 0 ? targetMsg[0].message || fm : ''
        return r
    }

    /**
     * 不需要page transition的頁面(通常用在有child page的地方)
     * 自行新增刪除 disabledPathNames 裡面的頁面
     * @param to
     * @param from
     */
    const disabledTransition = (to, from): boolean => {
        let r = false
        try {
            const disabledPathNames = ['member']
            const fromName = from.name.split('___')[0]
            const toName = to.name.split('___')[0]
            const fromParentName = fromName.split('-')[0]
            const toParentName = toName.split('-')[0]
            const existName = disabledPathNames.filter(
                (x) => fromParentName === x && toParentName === x,
            )
            if (isSameLocale(to, from) && existName.length > 0) r = true
            return r
        } catch (error) {}
        return false
    }

    const lazyLoadImage = () => {
        enum StatusEnum {
            Success = 'success',
            Fail = 'fail',
        }
        type Status = StatusEnum.Success | StatusEnum.Fail
        const loadedClass = CLASSNAME_NUXT_LAZY_LOADED
        /** First we get all the non-loaded image elements **/
        const lazyImages = [].slice.call(
            document.querySelectorAll(`img[data-manual-lazy]:not(.${loadedClass})`),
        )
        const lazyBackgroundImages = [].slice.call(
            document.querySelectorAll(`[data-manual-lazy-background]:not(.${loadedClass})`),
        )
        const imgLoaded = (image: any, status: Status) => {
            image.classList.add(loadedClass)
            switch (status) {
                case StatusEnum.Success:
                    break
                case StatusEnum.Fail:
                    image.classList.add(CLASSNAME_NUXT_LAZY_FAIL)
                    break
                default:
                    break
            }
        }
        /** Then we set up a intersection observer watching over those images and whenever any of those becomes visible on the view then replace the placeholder image with actual one, remove the non-loaded class and then unobserve for that element **/
        let lazyBackgroundImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target as any
                    const img = new Image()
                    img.onload = (e) => {
                        if (img.height <= 1) {
                            //lazyImage.style.backgroundImage = `url(${notFound_png})`
                            imgLoaded(lazyImage, StatusEnum.Fail)
                        } else {
                            lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src})`
                            imgLoaded(lazyImage, StatusEnum.Success)
                        }
                    }
                    img.onerror = () => {
                        //lazyImage.style.backgroundImage = `url(${notFound_png})`
                        imgLoaded(lazyImage, StatusEnum.Fail)
                    }
                    img.src = lazyImage.dataset.src
                    lazyBackgroundImageObserver.unobserve(lazyImage)
                }
            })
        })

        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target as any
                    const img = new Image()
                    img.onload = (e) => {
                        if (img.height <= 1) {
                            //lazyImage.src = notFound_png
                            imgLoaded(lazyImage, StatusEnum.Fail)
                        } else {
                            lazyImage.src = lazyImage.dataset.src
                            imgLoaded(lazyImage, StatusEnum.Success)
                        }
                    }
                    img.onerror = () => {
                        //lazyImage.src = notFound_png
                        imgLoaded(lazyImage, StatusEnum.Fail)
                    }
                    img.src = lazyImage.dataset.src
                    lazyImageObserver.unobserve(lazyImage)
                }
            })
        })

        /** Now observe all the non-loaded images using the observer we have setup above **/
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage)
        })
        lazyBackgroundImages.forEach(function (lazyImage) {
            lazyBackgroundImageObserver.observe(lazyImage)
        })
    }

    return {
        provide: {
            useAbort,
            useMedia: {
                ...media,
            },
            isPc,
            isMobile,
            jsRandom,
            jsRandomFloor,
            getToRealPath,
            getToRealName,
            setHtmlReady,
            removeHtmlReady,
            refreshPage,
            scrollToElement,
            goTop,
            getWindowLoco,
            isLocoSmooth,
            isSamePathExcludeLocale,
            isSameLocale,
            getApiTMsg,
            disabledTransition,
            lazyLoadImage,
        },
    }
})
