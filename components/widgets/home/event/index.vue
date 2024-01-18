<template>
    <section class="home-event" ref="sectionEl">home-event</section>
</template>
<script lang="ts" setup>
import HomeEventItem from './event-item.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { screensMedia } from '@/vender/unocss/screens'
import type { IHomePageEvents } from '@/models/api/widget/homepage/events'

const { $gsap, $getApiTMsg } = useNuxtApp()
const storeGlobal = useGlobalStore()
const { screenResizeState } = useAfterScreenResize()
const localePath = useLocalePath()
const { t } = useI18n()
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
        type: Object as PropType<IHomePageEvents>,
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

onUnmounted(() => {})
</script>
<style lang="scss" scoped>
.home-event {
}
</style>
