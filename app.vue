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
const { toggleTransitionComplete } = useTransition()
// 設定page meta
useMetaHead({
    title: 'DigiSalad Nuxt3 基本使用',
    description: 'DigiSalad Nuxt3 基本使用',
})

onMounted(() => {
    toggleTransitionComplete(true)
})
</script>
<style></style>
