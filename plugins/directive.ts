import type { ObjectDirective } from 'vue'
import type { GScrollTriggerParams } from '@/models/directive'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CLASSNAME_IN_VIEW } from '@/constants/type/className-variables'
import { screensMedia } from '@/vender/unocss/screens'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('g-scroll-trigger', {
        beforeMount(el, binding, vnode, prevVnode) {},
        async mounted(el, binding, vnode, prevVnode) {
            const { $jsRandom } = useNuxtApp()
            const { options, media, delay } = binding.value ?? {}
            const id = `g-${$jsRandom(0, 1000)}`
            el.setAttribute('data-g-scroll', id)
            const opt_default = {
                id,
                trigger: el,
                toggleClass: CLASSNAME_IN_VIEW,
                // onToggle: ({ progress, direction, isActive }) => {
                //     console.warn(isActive, id)
                // },
                // onEnter: ({ progress, direction, isActive }) => {
                //     console.warn('onEnter', isActive, id)
                // },
                start: '0% 80%',
                end: () => '100% 0',
                onRefresh: () => {
                    ScrollTrigger.getById(id)?.refresh()
                },
                //markers: true,
            } as ScrollTrigger.StaticVars
            const opt_new = { ...opt_default, ...options }
            let mm = gsap.matchMedia()
            await nextTick()
            window[`g-timeout-${id}`] = setTimeout(() => {
                if (media) {
                    for (const key in media) {
                        if (Object.prototype.hasOwnProperty.call(media, key)) {
                            const opt_media = media[key]
                            const opt_new = { ...opt_default, ...options, ...opt_media }
                            mm.add(
                                `(${screensMedia[key].type}-width: ${screensMedia[key].value}px)`,
                                () => {
                                    ScrollTrigger.create(opt_new)
                                },
                            )
                        }
                    }
                } else {
                    ScrollTrigger.create(opt_new)
                }
            }, delay || 1)
        },
        beforeUnmount(el, binding, vnode, prevVnode) {
            const _el = el as HTMLElement
            const scrollTriggerId = _el.getAttribute('data-g-scroll')
            scrollTriggerId && ScrollTrigger.getById(scrollTriggerId)?.kill()
            clearTimeout(window[`g-timeout-${scrollTriggerId}`])
        },
        getSSRProps(binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        },
    })
})
