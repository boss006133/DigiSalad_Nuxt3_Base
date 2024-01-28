<template>
    <div id="nuxt-layout">
        <!-- 移除瀏覽器詢問填入密碼 -->
        <v-text-field class="ds-input-fake" readonly></v-text-field>
        <!-- Site開場動畫 -->
        <UiDsOpenTransition v-if="!isOpenTransitionFinished" />
        <Header />
        <div class="locomotive-layout">
            <main>
                <slot :key="storeGlobal.pageKey" />
                <FnFixedOnPage />
            </main>
            <Footer v-if="storeGlobal.footerBar" />
        </div>

        <PopupNavMenu />
        <!-- loader -->
        <!-- <UiDsPageLoader /> -->
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'

const nuxtApp = useNuxtApp()
const storeGlobal = useGlobalStore()

const { isOpenTransitionFinished } = storeToRefs(storeGlobal)

onMounted(async () => {
    storeGlobal[actionIndex.SET_PAGE_TRANSITION_FINISHED](true)
})
</script>
<style lang="scss"></style>
