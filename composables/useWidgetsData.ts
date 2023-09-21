export function useWidgetsData(data) {
    const myData = computed(() => data.value.data)
    const widgetsOrder = computed(() => myData.value.widgets_order)
    const widgets = computed(() => myData.value.widgets)
    const seo = ref(myData.value.seo)
    const pageSetting = ref(data.value.page_setting)
    const widgetsList = computed(() => {
        return widgetsOrder.value
            .map((code) => {
                return widgets.value.find((item) => item.code == code) ?? null
            })
            .filter(Boolean)
    })
    const widgetsObj = computed(() => {
        const obj = {}
        widgetsOrder.value.forEach(
            (v) => (obj[v] = widgetsList.value.find((u) => u.code === v)),
        )
        return obj
    })
    return {
        myData,
        widgetsOrder,
        widgets,
        seo,
        pageSetting,
        widgetsList,
        widgetsObj,
    }
}
