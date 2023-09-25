import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
export default defineNuxtPlugin(() => {
    const storeGlobal = useGlobalStore()
    const media = useMedia()
    const device = useDevice()
    const { $i18n } = useNuxtApp()
    const localePath = useLocalePath()
    /* 電腦版 */
    const isPc = computed(() => device.isDesktop)
    /* 行動版 */
    const isMobile = computed(() => !device.isDesktop)

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
        return typeof toName === 'string'
            ? toName?.split(`___${$i18n.locale.value}`)[0]
            : null
    }

    /**
     * 比對(目的route path) 和 (當前route path),如果一樣則進行page refresh
     * @param path
     */
    const refreshPage = async (path) => {
        const route = useRoute()
        const strToPath = getToRealPath(route.path)
        if (strToPath === localePath(path)) {
            storeGlobal[actionIndex.SET_PAGELOADING](true)
            storeGlobal.pageKey = await new Date().getTime()
        }
    }

    //#region cancel request
    let cancelRequests = [] as Array<any>
    const useAbort = {
        signal: () => {
            let controller = new AbortController()
            const t = controller.signal

            cancelRequests.push(controller)
            return t
        },
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

    return {
        provide: {
            useAbort,
            useMedia: {
                ...media,
            },
            isPc,
            isMobile,
            getToRealPath,
            getToRealName,
            refreshPage,
        },
    }
})
