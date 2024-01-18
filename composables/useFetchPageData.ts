import { reactive } from 'vue'
import { useGlobalStore } from '~/store'

const fetchState = reactive({
    hasCallOnce: false,
})

export const useFetchPageData = (fetchCall: () => void) => {
    const storeGlobal = useGlobalStore()
    const { isSamePathExcludeLocale } = storeToRefs(storeGlobal)

    const fetchAsyncPageData = async () => {
        fetchState.hasCallOnce = false
        await callOnce(async () => {
            await fetchCall()
            fetchState.hasCallOnce = true
        })
        if (!isSamePathExcludeLocale.value && !fetchState.hasCallOnce) {
            await fetchCall()
        }
    }

    return {
        fetchAsyncPageData,
    }
}
