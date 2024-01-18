import { definePreset } from 'unocss'
import type { Preset } from 'unocss'
import { screensUno as breakpoints } from './screens'
import fontSizeResponsive from './fontSize_responsive'
import fontSizeDesktop from './fontSize_desktop'
import colors from './colors.json'
import fontFamily from './fontFamily'
const fontSize = { ...fontSizeDesktop, ...fontSizeResponsive }

export default definePreset((options?): Preset => {
    return {
        name: 'unocssPreset',
        theme: {
            fontFamily,
            fontSize,
            colors,
            breakpoints,
        },
    }
})
