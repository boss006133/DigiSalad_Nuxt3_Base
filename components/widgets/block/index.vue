<template>
    <component
        class="widget-block"
        v-if="type"
        :is="widgetType"
        :data-widget-code="code"
        :data-widget-type="type"
        :data-widget-component-type="componentType"
        :data-block-unique-id="blockUniqueId"
        :data-block-index="blockIndex"
        v-bind="{ code, type, data, blockIndex }"
    />
</template>

<script lang="ts" setup>
// import {  } from '#components'

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
        type: Object,
        default: {},
    },
})
const { code, type, componentType, data, blockIndex, blockUniqueId } = useWidgetsProps(props)

const widgetMap = {
    hero: {
        'homepage-hero': resolveComponent('widgets/home/hero'),
    },
    'homepage-match-center': {
        'homepage-match-center': resolveComponent('widgets/home/match-center'),
    },
    'homepage-event': {
        'homepage-event': resolveComponent('widgets/home/event'),
    },
    'homepage-countdown': {
        'homepage-countdown': resolveComponent('widgets/home/countdown'),
    },
    'homepage-news': {
        'homepage-news': resolveComponent('widgets/home/news'),
    },
    'homepage-impact': {
        'homepage-impact': resolveComponent('widgets/home/impact'),
    },
    gallery: {
        'homepage-gallery': resolveComponent('widgets/home/gallery'),
    },
    'homepage-sponsor': {
        'homepage-sponsor': resolveComponent('widgets/home/sponsor'),
    },
}

const widgetType = computed(() => {
    if (!widgetMap[type.value] || !widgetMap[type.value][code.value]) return null
    return widgetMap[type.value][code.value]
})
</script>
<style lang="scss">
.widget-block {
}
</style>
