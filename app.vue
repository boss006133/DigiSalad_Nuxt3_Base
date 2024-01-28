<template>
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage class="nuxt-page" />
    </NuxtLayout>
</template>
<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import colors from '@/vender/unocss/colors.json'
const storeGlobal = useGlobalStore()
const { pageKey } = storeToRefs(storeGlobal)
const { $Nav, $config } = useNuxtApp()
const { t } = useI18n()
const schemaPty = useSchemaProperty()
const metaTitle = t('seo.home.title')

useMetaHead({
    image: `${$config.public.baseURL}/image/DS-Club-square-logo.png`,
    imageWidth: '1126',
    imageHeight: '1043',
})

//#region useSchemaOrg
useSchemaOrg([
    // TODO Select Identity: https://unhead.unjs.io/schema-org/guides/identity
    defineWebSite({
        name: metaTitle,
    }),
    defineLocalBusiness({
        '@type': ['ProfessionalService'],
        name: metaTitle,
        logo: schemaPty.logo,
        telephone: schemaPty.telephone,
        email: schemaPty.businessEmail,
        address: schemaPty.address,
        openingHoursSpecification: schemaPty.openingHoursSpecification,
    }),
    defineWebPage(),
])
//#endregion

onMounted(async () => {
    await nextTick()
})

onUnmounted(() => {
    //清除全域Timeout
    window.globalTimeout.forEach((timeout) => {
        clearTimeout(timeout)
    })
    window.globalTimeout = []
})

watch(
    () => pageKey.value,
    async (newValue) => {
        await nextTick()
        $Nav.close()
    },
)
</script>
<style lang="scss"></style>
