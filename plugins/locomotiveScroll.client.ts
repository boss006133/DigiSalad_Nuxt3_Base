import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'

export default defineNuxtPlugin(() => {
    const { $getWindowLoco, $isMobile } = useNuxtApp()
    const { screenResizeState } = useAfterScreenResize()
    const locomotivePrefix = 'locomotive'
    const storeGlobal = useGlobalStore()
    let thumb_height = 0
    let scrollbarThumb: HTMLElement | null, scrollbarScrollbar: HTMLElement | null
    const vertical_gap = 4

    /**
     * create LocomotiveScroll
     */
    const LocomotiveScrollCreate = async ({
        key,
        wrapperSelector,
        options,
        scrollTrigger,
    }: {
        key: string
        wrapperSelector?: string
        options?: any
        scrollTrigger?: boolean
    }) => {
        let default_options = {
            scrollCallback: onScroll,
        } as any
        let winLoco = null as any
        if (wrapperSelector) {
            const wrapper = document.querySelector(wrapperSelector) as HTMLElement
            default_options.wrapper = wrapper
        }
        if (scrollTrigger) {
            default_options.initCustomTicker = (render) => {
                gsap.ticker.add(render)
            }
            default_options.destroyCustomTicker = (render) => {
                gsap.ticker.remove(render)
            }
        }
        const new_options = { ...default_options, ...options }
        try {
            //#region Third Party Injected Popups
            const scrollEvents = ['wheel', 'touchmove']
            const stopPropagationClassNames = ['v-menu', 'popupNav__list']
            const preventScroll = (event) => {
                const paths = event.composedPath()
                paths.find((el) => {
                    if (
                        el instanceof HTMLElement &&
                        stopPropagationClassNames.some((className) =>
                            el?.classList.contains(className),
                        )
                    ) {
                        event.stopPropagation()
                        return
                    }
                })
            }
            const lenisAddEventListener = (events) => {
                events.forEach((event) => {
                    winLoco &&
                        winLoco.lenisInstance.options.content.addEventListener(event, preventScroll)
                })
            }
            const lenisRemoveEventListener = (events) => {
                events.forEach((event) => {
                    winLoco &&
                        winLoco.lenisInstance.options.content.removeEventListener(
                            event,
                            preventScroll,
                        )
                })
            }
            //#endregion

            const destroy = () => {
                const tempLoco = window[`${locomotivePrefix}-${key}`]
                if (tempLoco) {
                    lenisRemoveEventListener(scrollEvents)
                    tempLoco.destroy()
                    delete window[`${locomotivePrefix}-${key}`]
                }
            }

            // 防止重複載入
            destroy()

            //create LenisScroll
            winLoco = window[`${locomotivePrefix}-${key}`] = new LocomotiveScroll({
                ...new_options,
            })
            winLoco.abandon = destroy

            // Third Party Injected Popups
            lenisAddEventListener(scrollEvents)

            // add gsap scrollTrigger
            if (scrollTrigger && winLoco) {
                winLoco.lenisInstance.on('scroll', ScrollTrigger.update)
            }
        } catch (error) {
            console.warn(error)
        }
    }

    //#region 自製scrollbar
    const initScrollbarEls = () => {
        scrollbarScrollbar = document.querySelector('.scrollbar_scrollbar')
        scrollbarThumb = document.querySelector('.scrollbar_thumb')
        setScrollbarTransition()
        setScrollbarOuterGap()
    }
    const scrollbarEl = () => scrollbarScrollbar
    const setScrollbarOuterGap = () => {
        if (scrollbarScrollbar instanceof HTMLElement) {
            scrollbarScrollbar.style.setProperty('--vertical-gap', `${vertical_gap}`)
        }
    }
    const setScrollbarTransition = () => {
        if ($isMobile.value) return
        const winLoco = $getWindowLoco('layout')

        if (scrollbarThumb instanceof HTMLElement && winLoco) {
            const { limit, scroll } = winLoco.lenisInstance

            if (limit <= 0) scrollbarThumb.style.display = 'none'
            else {
                const wH = window.innerHeight
                const new_limit = wH + limit
                const vh = wH - vertical_gap * 2
                const vh_rate = vh / new_limit
                thumb_height = vh_rate * wH
                let real_scroll = scroll * vh_rate
                scrollbarThumb.style.display = 'block'
                scrollbarThumb.style.setProperty('--position', `${real_scroll}`)
                scrollbarThumb.style.setProperty('--height', `${thumb_height}`)
            }
        }
    }
    const onScroll = ({ scroll, limit, velocity, direction, progress }) => {
        setScrollbarTransition()
    }
    //#endregion

    const createLayoutLocomotive = () => {
        LocomotiveScrollCreate({
            key: 'layout',
            options: {
                autoStart: false,
                lenisOptions: {
                    duration: 1,
                },
            },
            scrollTrigger: true,
        })
        initScrollbarEls()
        storeGlobal[actionIndex.SET_LOCOMOTIVESCROLL_DONE](true)
    }

    watch(
        () => screenResizeState.resizeComplete,
        (newValue) => {
            if (newValue) {
                createLayoutLocomotive()
                const winLoco = $getWindowLoco('layout')
                winLoco && winLoco.start()
            }
        },
    )
    return {
        provide: {
            LocomotiveScroll,
            LocomotiveScrollCreate,
            locomotivePrefix,
            createLayoutLocomotive,
            initScrollbarEls,
            setScrollbarTransition,
            scrollbarEl,
        },
    }
})
