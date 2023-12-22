<template>
    <div id="nuxt-layout">
        <NuxtLoadingIndicator />
        <slot :key="storeGlobal.pageKey" />

        <!-- loader -->
        <UiDsPageLoader />
    </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
</script>
<style lang="scss"></style>
