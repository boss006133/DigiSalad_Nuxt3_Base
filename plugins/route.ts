import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp()
    const storeGlobal = useGlobalStore(nuxtApp.$pinia)
    const router = nuxtApp.$router as any
    const { toggleTransitionComplete } = useTransition()

    let pathToTemp = ''
    router.beforeEach(async (to, from, next) => {
        if (process.client && from.path !== to.path) {
            toggleTransitionComplete(false)
        }
        next()
    })

    router.afterEach((to, from) => {
        if (pathToTemp === to.path) {
            toggleTransitionComplete(true)
        }
    })

    nuxtApp.hook('page:finish', () => {
        storeGlobal[actionIndex.SET_PAGELOADING](false)
        pathToTemp = nuxtApp.$router.currentRoute.value.path
        toggleTransitionComplete(true)
    })
})
