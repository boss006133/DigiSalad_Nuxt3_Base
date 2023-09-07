import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
export default defineNuxtPlugin((nuxtApp: any) => {
    const { $i18n, $pinia } = useNuxtApp()
    $i18n.onLanguageSwitched = async () => {
        const storeGlobal = useGlobalStore($pinia)
        await storeGlobal.nuxtServerInit()
    }
})
