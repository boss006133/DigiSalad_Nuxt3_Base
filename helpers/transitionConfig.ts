/**
 * Page Transition 設定
 * ※自行使用Hooks配合gsap (https://nuxt.com/docs/getting-started/transitions#javascript-hooks)
 * ※如果只想單純只有css控制動畫 (https://nuxt.com/docs/getting-started/transitions#page-transitions)
 * ★Nuxt官方尚未修正 mode: 'out-in' 之bug(router 切換太快會導致Page UI消失),請斟酌使用,或使用mode: 'in-out'
 */
import gsap from 'gsap'
import { useTransition } from '../composables/useTransition'
const { toggleTransitionComplete } = useTransition()

const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onEnter: (el: any, done: any) => {
        gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 })
        gsap.timeline({
            paused: true,
            onComplete() {
                toggleTransitionComplete(true)
                done()
            },
        })
            .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(el, { scale: 1, duration: 0.25 })
            .play()
    },
    onLeave: (el: any, done: any) => {
        toggleTransitionComplete(false)
        gsap.timeline({ paused: true, onComplete: done })
            .to(el, { scale: 0.8, duration: 0.2 })
            .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play()
    },
}
const middleware = (to: any, from: any) => {}
export default { pageTransition, middleware }
