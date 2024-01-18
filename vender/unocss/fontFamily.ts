/**
 * Customizing fontFamily
 */
const fonts = {
    en: ['Avenir Next'],
    tc: ['Noto Sans TC'],
    // sc: ['Noto Sans SC'],
}
const fontFamily = {
    en: [
        ...fonts.en,
        ...fonts.tc,
        // ...defaultTheme.fontFamily.sans,
    ],
    tc: [...fonts.en, ...fonts.tc],
    // sc: [...fonts.en, ...fonts.sc],
}

export default fontFamily
