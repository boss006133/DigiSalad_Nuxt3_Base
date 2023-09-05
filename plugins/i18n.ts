import { useGlobalStore } from '~/store'

export default defineNuxtPlugin((nuxtApp: any) => {
    const { $i18n, $pinia } = useNuxtApp()
    $i18n.onLanguageSwitched = async () => {
        const store = useGlobalStore($pinia)
        await store.nuxtServerInit()
    }
})
