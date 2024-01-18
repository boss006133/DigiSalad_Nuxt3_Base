import { useGlobalStore } from '~/store'

export function useWidgetsBlocksLoaded({ widgetsBlocks }: { widgetsBlocks: Array<any> }) {
    const storeGlobal = useGlobalStore()
    const { toggleWidgetsBlockComplete } = useWidgetsBlocksEvents()
    const widgetsBlocksCount = ref(0)
    if (widgetsBlocks.length <= 0) toggleWidgetsBlockComplete(true)

    storeGlobal.widgetsTypeList = widgetsBlocks.map((x) => {
        return {
            type: x.type,
            code: x.code,
            dataType: x.data?.type || '',
        }
    })

    const isWidgetAllLoaded = computed(() => {
        return widgetsBlocksCount.value >= widgetsBlocks.length
    })
    const widgetMounted = (widgetsProps) => {
        widgetsBlocksCount.value++
    }

    watch(
        () => isWidgetAllLoaded.value,
        (newValue) => {
            if (newValue) {
                toggleWidgetsBlockComplete(true)
            }
        },
    )

    return { widgetMounted, isWidgetAllLoaded }
}
