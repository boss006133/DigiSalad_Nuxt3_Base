<template>
    <section class="home-hero-images-slider" ref="sectionEl">home-hero-images-slider</section>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { screensMedia } from '@/vender/unocss/screens'
import type { IHomePageHeroSlide } from '@/models/api/widget/homepage/hero'
const { $gsap, $isPc } = useNuxtApp()
const storeGlobal = useGlobalStore()
const { isPagePosTop } = storeToRefs(storeGlobal)
const { $getApiTMsg, $lazyLoadImage } = useNuxtApp()

const sectionEl = ref<HTMLElement | null>()

const props = defineProps({
    blockIndex: {
        // 組件index
        type: Number,
        default: 0,
    },
    code: {
        // 組件key
        type: String,
        default: '',
    },
    type: {
        // 組件類型
        type: String,
        default: '',
    },
    data: {
        // 組件內容和設定
        type: Array<IHomePageHeroSlide>,
        default: [],
    },
})
const widgetsProps = useWidgetsProps(props)
const { code, type, data, blockIndex, blockUniqueId } = widgetsProps
const emit = defineEmits(['widget:loaded'])

onMounted(async () => {
    await nextTick()
    emit('widget:loaded', widgetsProps)
})
onUnmounted(() => {})
</script>
<style lang="scss">
.home-hero-images-slider {
}
</style>
