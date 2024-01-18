<template>
    <component
        class="home-hero"
        v-if="type"
        :is="widgetComponent"
        v-bind="{ code, type, data: widgetData, blockIndex }"
        @widget:loaded="widgetMounted"
    />
</template>

<script lang="ts" setup>
import type { IHomePageHero } from '@/models/api/widget/homepage/hero'
import { EWidgetDataType } from '@/models/api/widget/homepage/hero'

const { t } = useI18n()
const { query } = useRoute()

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
        type: Object as PropType<IHomePageHero>,
        default: {},
    },
})
const widgetsProps = useWidgetsProps(props)
const { code, type, componentType, data, blockIndex, blockUniqueId } = widgetsProps
const emit = defineEmits(['widget:loaded'])

type TWidgetDataType = typeof EWidgetDataType.videoPlayer | typeof EWidgetDataType.imagesSlider
const widgetDataMap: Record<TWidgetDataType, any> = {
    [EWidgetDataType.videoPlayer]: data.value.video,
    [EWidgetDataType.imagesSlider]: data.value.slides,
}
const widgetComponentMap = {
    [EWidgetDataType.videoPlayer]: resolveComponent('widgets/home/hero/video'),
    [EWidgetDataType.imagesSlider]: resolveComponent('widgets/home/hero/images-slider'),
}

const widgetComponent = computed(() => {
    return widgetComponentMap[componentType.value]
})
const widgetData = computed(() => {
    return widgetDataMap[componentType.value]
})
const widgetMounted = () => {
    emit('widget:loaded', widgetsProps)
}
</script>
<style lang="scss"></style>
