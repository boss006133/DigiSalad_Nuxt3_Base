export default defineNuxtPlugin((nuxtApp) => {
    const { toggleScreenResizeComplete } = useAfterScreenResize()
    const { width, height } = useWindowSize()
    const windowObj = reactive({ width, height })

    //#region 監聽視窗after resize
    let resizeTimer, windowWidth
    const resizeListen = () => {
        const { width, height } = useWindowSize()
        clearTimeout(resizeTimer)
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
})
