/**
 * Customizing fontFamily
 */
const fonts = {
    en: ["'Moderat'"],
    en4zh: ["'Moderat-en'"],
    tc: ["Noto Sans TC"],
    sc: ["Noto Sans SC"]
}
const fontFamily = {
    en: [
        ...fonts.en,
        // ...defaultTheme.fontFamily.sans,
    ],
    sc: [
        ...fonts.en4zh,
        ...fonts.sc,
    ],
    other: [
        ...fonts.en4zh,
        ...fonts.tc,
    ],
}

export default fontFamily