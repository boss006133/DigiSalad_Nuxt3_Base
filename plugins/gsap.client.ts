import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { Draggable } from 'gsap/Draggable'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, TextPlugin, CustomEase)

    CustomEase.create('cusEase-1', '0.16, 1, 0.3, 1')
    CustomEase.create('cusEase-2', '0.32, 0.51, 0.04, 1')
    CustomEase.create(
        'cusEase-3',
        'M0,0 C0.095,-2.112 0.453,0.424 0.5,0.619 0.657,1.281 0.843,1.032 1,1 ',
    )
    // only fire callbacks when the active state toggles
    ScrollTrigger.config({
        ignoreMobileResize: true,
    })
    return {
        provide: {
            gsap,
            Draggable,
            ScrollTrigger,
        },
    }
})
