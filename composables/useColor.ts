import colors from '@/vender/unocss/colors.json'

export const useColor = () => {
    const colorsObj = colors
    const colorList = reactive({} as any)
    Object.entries(colorsObj).forEach(([level1key, level1value]) => {
        if ((level1value as any).DEFAULT)
            colorList[level1key] = (level1value as any).DEFAULT
        // e.g. brand, secondary
        Object.entries(level1value).forEach(([level2key, level2value]) => {
            // e.g. brand_01, secondary_01
            const fullKey = `${level1key}_${level2key}`
            colorList[fullKey] = level2value
        })
    })
    return toRefs(colorList)
}
