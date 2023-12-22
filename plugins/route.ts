import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import UiBody from '@/components/ui/body.vue'
import { createVNode, render } from 'vue'

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp()
    const storeGlobal = useGlobalStore(nuxtApp.$pinia)
    const router = nuxtApp.$router as any
    const { toggleTransitionComplete } = useTransition()
    const { init: animeInit, open: animeOpen, close: animeClose } = useAppTransition()

    let pathToTemp = ''
    router.beforeEach(async (to, from, next) => {
        if (process.client) {
            animeOpen().restart().pause()
        }
        //頁面過場動畫:開啟
        if (process.client && from.path !== to.path) {
            toggleTransitionComplete(false)
            await animeOpen().play()
        }
        next()
    })

    router.afterEach((to, from) => {
        if (pathToTemp === to.path) {
            animeClose().play()
            toggleTransitionComplete(true)
        }
    })

    nuxtApp.hook('app:beforeMount', async () => {
        // insert global component to body
        let vnode_body = createVNode(UiBody)
        render(vnode_body, document.body)
        await nextTick()
        animeInit()
    })
    nuxtApp.hook('page:finish', () => {
        storeGlobal[actionIndex.SET_PAGELOADING](false)
        pathToTemp = nuxtApp.$router.currentRoute.value.path

        //頁面過場動畫:關閉
        animeClose().play()
        toggleTransitionComplete(true)
    })
})
