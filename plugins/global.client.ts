export default defineNuxtPlugin((nuxtApp) => {
    const { toggleScreenResizeComplete } = useAfterScreenResize()
    const { width, height } = useWindowSize()
    const windowObj = reactive({ width, height })
    const setVH = () => {
        const self = this as any
        let vh = window.innerHeight * 0.01
        const root = document.querySelector(':root') as any
        root.style.setProperty('--vh', `${vh}px`)
    }
    setVH()
    watch(
        windowObj,
        (newWidth, oldWidth) => {
            setVH()
        },
        { deep: true },
    )

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
