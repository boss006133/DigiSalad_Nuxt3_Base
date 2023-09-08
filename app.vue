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
const localeIso = computed(() => {
    return locales.value.find((v) => v.code == locale.value)?.iso
})
useHead({
    htmlAttrs: {
        hreflang: localeIso.value,
        lang: localeIso,
        xmlns: 'http://www.w3.org/1999/xhtml',
        'xml:lang': localeIso.value
    }
})
onMounted(() => {
    toggleTransitionComplete(true)
})
</script>
<style></style>
