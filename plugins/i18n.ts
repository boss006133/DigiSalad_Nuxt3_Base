import { useGlobalStore } from '~/store'
export default defineNuxtPlugin((nuxtApp: any) => {
    const { $pinia } = useNuxtApp()

    nuxtApp.hook('i18n:localeSwitched', async ({ oldLocale, newLocale }) => {
        const storeGlobal = useGlobalStore($pinia)
        await storeGlobal.nuxtServerInit()
    })
})
