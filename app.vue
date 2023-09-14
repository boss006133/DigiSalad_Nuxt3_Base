<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
        <UiPageLoader />
    </NuxtLayout>
</template>
<script setup>
const { toggleTransitionComplete } = useTransition()
const { locale, locales } = useI18n()
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
