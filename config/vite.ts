import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { screensDefault as breakpoints } from '../vender/unocss/screens'
import * as customVariables from '../constants/type/className-variables'
import fontSizeDesktop from '../vender/unocss/fontSize_desktop'

//extend font size scss variable
const keysFontSizeBase = Object.keys(fontSizeDesktop)
    .map((key: string) => {
        const name = `text-${key.substring(0, key.lastIndexOf('-'))}`
        const desktop = `${name}-d`
        const responsive = `${name}-r`
        return `'${name}':(desktop:${desktop},responsive:${responsive})`
    })
    .join(',')
const varFonts = `$font-size-base:(${keysFontSizeBase})`

//extend media query scss variable
const keysBreakpoints = Object.keys(breakpoints)
    .map((key: string) => {
        const name = `${key}`
        const maxWidth = `${breakpoints[key]}px`
        const minWidth = `${breakpoints[key] + 1}px`
        const breakpoint = key
        return `'${name}':(
        max:${maxWidth},
        min:${minWidth},
        breakpoint:${breakpoint}
    )`
    })
    .join(',')
const varMedia = `$media-query-list:(${keysBreakpoints})`

//extend custom scss variable
const varCustomClass = Object.keys(customVariables)
    .map((key: string) => {
        const value = `${customVariables[key]}`
        const name = value
            .split('-')
            .map((x, index) => {
                let str = x
                if (index > 0) {
                    str = x[0].toUpperCase() + x.slice(1)
                }
                return `${str}`
            })
            .join('')
        return `$${name}:'${value}'`
    })
    .join(';')

export default {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                ${varFonts};
                ${varMedia};
                ${varCustomClass};
                @import '~/assets/scss/variables-scss/index.scss';              
                @import '~/assets/scss/functions/index.scss';           
                `,
            },
        },
    },
    plugins: [vuetify({ autoImport: true })],
    vue: {
        template: {
            transformAssetUrls,
        },
    },
}
