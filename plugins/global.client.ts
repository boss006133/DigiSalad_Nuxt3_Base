import { useGlobalStore } from '~/store'

export default defineNuxtPlugin((nuxtApp) => {
    const storeGlobal = useGlobalStore()
    const { toggleScreenResizeComplete, toggleScreenResizing } = useAfterScreenResize()
    const { width, height } = useWindowSize()
    const windowObj = reactive({ width, height })

    //#region 監聽視窗after resize
    let resizeTimer, windowWidth
    const resizeListen = () => {
        const { width, height } = useWindowSize()
        clearTimeout(resizeTimer)
        toggleScreenResizing()
        if (width !== windowWidth) {
            toggleScreenResizeComplete(false)
            windowWidth = useWindowSize().width
            resizeTimer = setTimeout(() => {
                toggleScreenResizeComplete(true)
            }, 300)
        }
    }
    window.addEventListener('resize', resizeListen)
    //#endregion

    // 監聽是否正在瀏覽網頁
    window.onpagehide = window.onblur = () => {
        storeGlobal.isPageFocus = false
    }
    window.onpageshow = window.onfocus = () => {
        storeGlobal.isPageFocus = true
    }

    window.globalTimeout = []
})
