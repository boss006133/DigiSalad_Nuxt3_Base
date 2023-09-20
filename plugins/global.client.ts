export default defineNuxtPlugin((nuxtApp) => {
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
})
