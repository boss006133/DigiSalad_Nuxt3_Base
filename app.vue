<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
        <UiPageLoader />
    </NuxtLayout>
</template>
<script setup>
const { toggleTransitionComplete } = useTransition()

onMounted(() => {
    toggleTransitionComplete(true)
})
</script>
<style></style>
