<template>
    <NuxtLayout id="nuxt-layout">
        <NuxtLoadingIndicator />
        <NuxtPage :key="storeGlobal.pageKey" />
        <UiDsAppTransition />
        <UiDsPageLoader />
    </NuxtLayout>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
const { $config } = useNuxtApp()
const { toggleTransitionComplete } = useTransition()

//專案中自行替換下列參數值
// useMetaHead({
//     image: `${$config.public.baseURL}/image/DS-Club-square-logo.png`,
//     imageWidth: '1126',
//     imageHeight: '1034',
// })

//#region useSchemaOrg
useSchemaOrg([
    // TODO Select Identity: https://unhead.unjs.io/schema-org/guides/identity
    defineWebSite({
        name: 'My Awesome Website',
    }),
    defineWebPage(),
])
//#endregion

onMounted(() => {
    toggleTransitionComplete(true)
})
</script>
<style></style>
