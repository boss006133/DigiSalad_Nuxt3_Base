import colors from '@/vender/unocss/colors.json'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
//import 'vuetify/styles' // pre-build css styles

// import { customSVGs } from '@/assets/customSvgs'

/* Add all components and directives, for dev & prototyping only. */
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi'
const aliases = allAliases

const myCustomTheme: ThemeDefinition = {
    dark: false,
    colors: {
        error: colors.error.primary,
    },
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        // components,
        // directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            //sets: { custom: customSVGs },
        },
        theme: {
            defaultTheme: 'myCustomTheme',
            themes: {
                myCustomTheme,
            },
        },
    })

    nuxtApp.vueApp.use(vuetify as any)

    //if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
})
