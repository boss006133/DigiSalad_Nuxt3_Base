<template>
    <!-- header -->
    <header class="header-dark">
        <div class="media-xl">
            <div class="header__wrap">
                <span class="sample text-blue-600 py-[16px] block">Header</span>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
import {
    CLASSNAME_HEADER_STICKY,
    CLASSNAME_LAYOUT_SCROLL_DOWN,
} from '~/constants/type/className-variables'
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const SCROLL_DIRECTION_DOWN = 'down'
const SCROLL_DIRECTION_UP = 'up'
type TScrollDirection = typeof SCROLL_DIRECTION_DOWN | typeof SCROLL_DIRECTION_UP

const { $getWindowLoco, $getApiTMsg } = useNuxtApp()
const storeGlobal = useGlobalStore()
const { otherLocales } = useLocale()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

//#region 範例(自行修改)
const logoUrl = computed(() => storeGlobal.headerNavBar?.data.logo ?? '')
const sign_text = computed(() => $getApiTMsg(storeGlobal.headerNavBar?.data.sign_text))
const buy_text = computed(() => $getApiTMsg(storeGlobal.headerNavBar?.data.buy_text))
//#endregion

const onLocomotiveScroll = (e) => {
    const _html = document.documentElement
    const winLoco = $getWindowLoco('layout')
    if (!winLoco) return
    const { height } = useWindowSize()
    const y = winLoco.lenisInstance.scroll
    const direction: TScrollDirection =
        winLoco.lenisInstance.direction === 1 ? SCROLL_DIRECTION_DOWN : SCROLL_DIRECTION_UP
    const limit = height.value * 0.1

    if (y > limit) {
        if (!_html.classList.contains(CLASSNAME_HEADER_STICKY)) {
            _html.classList.add(CLASSNAME_HEADER_STICKY)
        }
        if (direction === SCROLL_DIRECTION_DOWN) {
            _html.classList.add(CLASSNAME_LAYOUT_SCROLL_DOWN)
            if (!_html.classList.contains(CLASSNAME_LAYOUT_SCROLL_DOWN))
                _html.classList.add(CLASSNAME_LAYOUT_SCROLL_DOWN)
        } else {
            if (_html.classList.contains(CLASSNAME_LAYOUT_SCROLL_DOWN))
                _html.classList.remove(CLASSNAME_LAYOUT_SCROLL_DOWN)
        }
    } else {
        if (_html.classList.contains(CLASSNAME_HEADER_STICKY)) {
            _html.classList.remove(CLASSNAME_HEADER_STICKY)
            _html.classList.remove(CLASSNAME_LAYOUT_SCROLL_DOWN)
        }
    }
}
const addLocomotiveScroll = () => {
    window.addEventListener('scroll', onLocomotiveScroll)
}
const removeLocomotiveScroll = () => {
    window.removeEventListener('scroll', onLocomotiveScroll)
}
onMounted(() => {
    addLocomotiveScroll()
})
onBeforeUnmount(() => {
    removeLocomotiveScroll()
})
</script>
