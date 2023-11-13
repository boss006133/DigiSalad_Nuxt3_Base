// https://nuxtseo.com/site-config/api/config
import { defineNuxtModule } from '@nuxt/kit'
import { installNuxtSiteConfig, updateSiteConfig } from 'nuxt-site-config-kit'
const isProduction = process.env.NUXT_PUBLIC_NODE_ENV === 'production'
export default defineNuxtModule({
    // ...
    async setup(options) {
        await installNuxtSiteConfig()
        // Optional: set some site config from your modules options
        // This is not recommended, only to keep supporting your modules options
        updateSiteConfig({
            //url: options.siteUrl,
            indexable: isProduction,
        })
    },
})
