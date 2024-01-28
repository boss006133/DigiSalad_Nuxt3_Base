<template>
    <div class="scrollbar_scrollbar">
        <div class="scrollbar_inner">
            <div class="scrollbar_thumb" ref="scrollbarThumbEl"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
const { isSiteOpenAnimationDone } = storeToRefs(storeGlobal)
const scrollbarThumbEl = ref<HTMLElement>()
let isDown = ref(false)
let winLoco = null as any
let lastClientY = 0
let newScrollY = 0
let scrollbarScrollbar: HTMLElement | null
const CLASSNAME_SHOW = 'show'
const thumb_width_pc = 5
const thumb_width_mb = 3
const duration = 0.5
const getSpeed = () => {
    return window.innerHeight / (scrollbarThumbEl.value?.clientHeight || 1) || 1
}
const mouseDownEvent = (event: MouseEvent) => {
    isDown.value = true
    const speed = getSpeed()
    winLoco = window[`locomotive-layout`]
    if (winLoco) {
        const { scroll } = winLoco.lenisInstance
        lastClientY = event.clientY
        newScrollY = scroll / speed
    }
}
const mouseUpEvent = (e) => {
    isDown.value = false
    winLoco = null
}
const mouseMoveEvent = (event: MouseEvent) => {
    if (isDown.value && winLoco) {
        event.preventDefault()
        const speed = getSpeed()
        const { limit, scroll } = winLoco.lenisInstance
        const y = event.clientY
        const distanceOfReachEdge = 50

        newScrollY += -lastClientY + (lastClientY = y)

        // 當scrollbar_thumb 接近邊界(top or bottom), 將newScrollY重新計算
        if (scroll <= distanceOfReachEdge) {
            newScrollY = Math.max(newScrollY, 0)
        } else if (scroll >= limit - distanceOfReachEdge) {
            newScrollY = Math.min(newScrollY, limit / speed)
        }

        // 最大不過 limit, 最小不低於 0
        const sy = Math.max(Math.min(newScrollY * speed, limit), 0)

        // 移動scrollbar_thumb
        winLoco.scrollTo(sy, { duration })
    }

    // 當游標進入 detectAreaWidth 的範圍, 則顯示scrollbar_thumb
    const detectAreaWidth = window.innerWidth - (thumb_width_pc + 8)
    if (isSiteOpenAnimationDone.value) {
        if (event.clientX >= detectAreaWidth) {
            if (!scrollbarScrollbar?.classList.contains(CLASSNAME_SHOW)) {
                scrollbarScrollbar?.classList.add(CLASSNAME_SHOW)
            }
        } else {
            if (scrollbarScrollbar?.classList.contains(CLASSNAME_SHOW)) {
                scrollbarScrollbar?.classList.remove(CLASSNAME_SHOW)
            }
        }
    }
}
const mouseLeaveEvent = (event: MouseEvent) => {
    scrollbarScrollbar?.classList.remove(CLASSNAME_SHOW)
}
const addDragEvents = () => {
    scrollbarThumbEl.value?.addEventListener('mousedown', mouseDownEvent)
    document.addEventListener('mouseup', mouseUpEvent)
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)
}
const removeDragEvents = () => {
    scrollbarThumbEl.value?.removeEventListener('mousedown', mouseDownEvent)
    document.removeEventListener('mouseup', mouseUpEvent)
    document.removeEventListener('mousemove', mouseMoveEvent)
    document.removeEventListener('mouseleave', mouseLeaveEvent)
}
onMounted(async () => {
    await nextTick()
    const { $initScrollbarEls, $scrollbarEl } = useNuxtApp()
    addDragEvents()
    $initScrollbarEls()
    scrollbarScrollbar = $scrollbarEl()
})
onBeforeUnmount(() => {
    removeDragEvents()
})
</script>
<style lang="scss">
html,
body {
    &::-webkit-scrollbar {
        display: none;
    }
}
.scrollbar_scrollbar {
    $vertical-gap: var(--vertical-gap);
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 9100;
    padding: calc($vertical-gap * 1px) 0;
    opacity: 0;
    mix-blend-mode: difference;
    transition: opacity 0.15s ease, transform 0.15s ease;
    transform-origin: 50%;

    .scrollbar_inner {
        height: 100%;
        position: relative;
    }
    .scrollbar_thumb {
        $position: var(--position);
        $height: var(--height);
        height: calc($height * 1px);
        width: calc(v-bind(thumb_width_pc) * 1px);
        @apply bg-grey-400 bg-opacity-70;
        position: absolute;
        right: max(0.2rem, 2px);
        border-radius: 99em;
        // border: max(0.5px, 0.1rem) solid #4d3d30;
        cursor: -webkit-grab;
        cursor: grab;
        transform: translateY(calc(($position * 1px)));
        @include mediaMax('md') {
            width: calc(v-bind(thumb_width_mb) * 1px);
        }
    }

    [device='#{$uaMobile}'] &,
    .lenis.lenis-stopped & {
        opacity: 0;
        transform: scaleX(0);
        pointer-events: none;
    }
    [device='#{$uaPc}'].lenis.lenis-scrolling &,
    [device='#{$uaPc}'] &.show {
        opacity: 1;
    }

    @media (hover: hover) {
        &:hover {
            opacity: 1;
        }
    }
}
</style>
