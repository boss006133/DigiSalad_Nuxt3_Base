
import { screensDefault as breakpoints } from '../vender/tailwindcss/screens'
const fontSizeDesktop = require("../vender/tailwindcss/fontSize_desktop.json");
const keysFontSizeBase = Object.keys(fontSizeDesktop).map((key: string) => {
    const name = `text-${key.substring(0, key.lastIndexOf('-'))}`
    const desktop = `${name}-d`
    const responsive = `${name}-r`
    return `'${name}' ${desktop} ${responsive}`
}).join(',')
const varFonts = `$font-size-base: ${keysFontSizeBase}`

const keysBreakpoints = Object.keys(breakpoints).map((key: string) => {
    const name = `${key}`
    const maxWidth = `${breakpoints[key]}px`
    const minWidth = `${breakpoints[key] + 1}px`
    const breakpoint = key
    return `${name}:(
        max:${maxWidth},
        min:${minWidth},
        breakpoint:${breakpoint}
    )`
}).join(',')
const varMedia = `$media-query-list:(${keysBreakpoints})`

export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                ${varFonts};
                ${varMedia};
                @import '~/assets/scss/variables-css/index.scss';
                @import '~/assets/scss/functions/index.scss';
                `,
            },
        },
    },
}