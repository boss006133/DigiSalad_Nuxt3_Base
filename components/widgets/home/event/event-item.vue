<template>
    <div class="event-item" ref="itemEl">event-item</div>
</template>
<script lang="ts" setup>
import type { Item } from '@/models/api/widget/homepage/events'
const { $getApiTMsg } = useNuxtApp()
const props = defineProps({
    itemIndex: {
        type: Number,
        default: 0,
    },
    item: {
        type: Object as PropType<Item>,
        default: {},
    },
})
const itemEl = ref()
</script>
<style lang="scss" scoped>
.event-item {
}
</style>
