<template>
    <section class="home-hero-video" ref="sectionEl">home-hero-video</section>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { screensMedia } from '@/vender/unocss/screens'
import { EHeaderTheme } from '@/constants/others/enums'
import type { IHomePageHeroVideo } from '@/models/api/widget/homepage/hero'
const { $gsap, $getApiTMsg } = useNuxtApp()
const storeGlobal = useGlobalStore()
const { screenResizeState } = useAfterScreenResize()
const { t } = useI18n()
const sectionEl = ref()

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
        type: Object as PropType<IHomePageHeroVideo | null | undefined>,
        default: {},
    },
})
const widgetsProps = useWidgetsProps(props)
const { code, type, data, blockIndex, blockUniqueId } = widgetsProps
const emit = defineEmits(['widget:loaded'])

onMounted(async () => {
    await nextTick()
    emit('widget:loaded', widgetsProps)
})

onBeforeUnmount(() => {})
onUnmounted(() => {})
</script>
<style lang="scss">
.home-hero-video {
}
</style>
