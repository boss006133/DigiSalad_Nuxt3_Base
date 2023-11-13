<template>
    <div class="pageHome">
        <h1>DigiSalad Nuxt3 Base</h1>
        <NuxtLink class="btnGuide" :to="localePath('/ds-guide')">
            {{ $t('guide.btn_to_guide') }}
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
const localePath = useLocalePath()
// 設定page meta
useMetaHead({
    title: 'Home | DS Guide',
    description: 'DigiSalad Nuxt3 基本使用',
})
</script>
<style lang="scss">
@import '@/assets/scss/page/home';
</style>
