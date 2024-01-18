import { presetUno, transformerDirectives, defineConfig } from 'unocss'
import presetCustom from './vender/unocss/preset'

export default defineConfig({
    // ...UnoCSS options
    transformers: [transformerDirectives()],
    presets: [presetUno(), presetCustom()],
})
