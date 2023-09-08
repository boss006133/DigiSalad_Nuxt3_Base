/**
 * Customizing fontFamily
 */
const fonts = {
    en: ["'Proxima Nova'"],
    tc: ["Noto Sans TC"],
    sc: ["Noto Sans SC"]
}
const fontFamily = {
    en: [
        ...fonts.en,
        // ...defaultTheme.fontFamily.sans,
    ],
    tc: [
        ...fonts.tc,
        ...fonts.en,
    ],
    sc: [
        ...fonts.sc,
        ...fonts.en,
    ],

}

export default fontFamily