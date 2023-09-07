import { useGlobalStore } from '~/store'
export default defineNuxtPlugin(async ({}) => {
    const { $pinia } = useNuxtApp()
    if (process.server) {
        const storeGlobal = useGlobalStore($pinia)
        await storeGlobal.nuxtServerInit()
    }
})
