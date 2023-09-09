<template>
    <div class="pageHome">
        <h1>DigiSalad Nuxt3 Base</h1>
        <NuxtLink class="btnGuide" :to="localePath('/ds-guide')">
            {{ $t('guide.btn_to_guide') }}
        </NuxtLink>
    </div>
</template>
<script setup>
definePageMeta({
    pageTransition: {
        name: 'blur',
        mode: 'out-in'
    }
})
</script>
<style lang="scss">
@import '@/assets/scss/page/home';
</style>
