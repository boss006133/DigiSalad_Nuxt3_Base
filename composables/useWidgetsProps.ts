type WidgetDataRoot<T> = {
    code: string
    type: string
    data: T
    blockIndex: number
}
export function useWidgetsProps<T = any>(props: WidgetDataRoot<T>) {
    const code = computed(() => props.code)
    const type = computed(() => props.type)
    const data = computed(() => props.data)
    const blockIndex = computed(() => props.blockIndex)
    const blockUniqueId = computed(() => `${type.value}_${blockIndex.value}`)
    const componentType = computed(() => (data.value as any).type || '')
    return {
        code,
        type,
        componentType,
        data,
        blockIndex,
        blockUniqueId,
    }
}
