<template>
    <!-- fn-fixed-on-page -->
    <div class="fn-fixed-on-page">
        <div class="fn__container">
            <div class="fn_list">
                <div class="item">
                    <button
                        class="goTop btn btn-primary btn--lg"
                        type="button"
                        aria-label="back to top"
                        @click="$goTop()"
                    >
                        <span class="bg"></span>
                        <span class="icon">
                            <span class="ds-ico-arrow-up" ds-ico></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    CLASSNAME_SHOW_GOTOP,
    CLASSNAME_FLOAT_FN_STOP_STICKY,
} from '~/constants/type/className-variables'
const { $goTop, $getWindowLoco, $useMedia } = useNuxtApp()
const float_extra_bottom_pc = 40 + 24
const float_extra_bottom_md = 80
const onLocomotiveScroll = () => {
    const _html = document.documentElement
    const footer = document.querySelector('footer')
    const { height } = useWindowSize()
    const winLoco = $getWindowLoco('layout')
    const scroll = winLoco?.lenisInstance.scroll ?? window.scrollY
    const reachPoint = height.value * 0.4

    const checkOffset = () => {
        const getRectTop = (el) => {
            if (!el) return document.body.clientHeight
            const rect = el.getBoundingClientRect()
            return rect.top
        }
        const getExtraDistance = () => {
            return $useMedia.max('md') ? float_extra_bottom_md : float_extra_bottom_pc
        }
        if (scroll + window.innerHeight < getRectTop(footer) + scroll + getExtraDistance()) {
            if (_html?.classList.contains(CLASSNAME_FLOAT_FN_STOP_STICKY)) {
                _html?.classList.remove(CLASSNAME_FLOAT_FN_STOP_STICKY)
            }
        } else {
            if (!_html?.classList.contains(CLASSNAME_FLOAT_FN_STOP_STICKY)) {
                _html?.classList.add(CLASSNAME_FLOAT_FN_STOP_STICKY)
            }
        }
    }

    if (scroll > reachPoint) {
        if (!_html?.classList.contains(CLASSNAME_SHOW_GOTOP)) {
            _html?.classList.add(CLASSNAME_SHOW_GOTOP)
        }
    } else {
        if (_html?.classList.contains(CLASSNAME_SHOW_GOTOP)) {
            _html?.classList.remove(CLASSNAME_SHOW_GOTOP)
        }
    }

    checkOffset()
}
const addLocomotiveScroll = () => {
    window.addEventListener('scroll', onLocomotiveScroll)
}
const removeLocomotiveScroll = () => {
    window.removeEventListener('scroll', onLocomotiveScroll)
}

onBeforeUnmount(() => {
    removeLocomotiveScroll()
})
onMounted(async () => {
    addLocomotiveScroll()
})
onUnmounted(() => {})
</script>
<style lang="scss">
$goTop: '.goTop';
.fn-fixed-on-page {
    position: fixed;
    z-index: 990;
    bottom: 0;
    right: 0;
    pointer-events: none;
    .#{$floatFnStopSticky} & {
        position: absolute;
        bottom: calc(v-bind(float_extra_bottom_pc) * -1 * 1px);
        @include mediaMax('md') {
            bottom: calc(v-bind(float_extra_bottom_md) * -1 * 1px);
        }
    }
    .fn__container {
        position: absolute;
        bottom: 0;
        transform: translateX(-100%);
        padding: 0 48px 40px 0;
        @include mediaMax('3xl') {
            padding-right: 16px;
        }
        @include mediaMax('md') {
            padding-bottom: 20px;
        }
    }
    .fn_list {
        pointer-events: all;
    }
    #{$goTop} {
        position: relative;
        width: 48px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translate(0, 50%);
        transition: all 0.35s ease;
        background-color: transparent;
        &::after {
            display: none;
        }
        @include mediaMax('md') {
            width: 35px;
        }
        .bg {
            @apply bg-red-primary;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            border-radius: 0%;
            transition: all 0.25s ease;
        }
        .icon {
            position: relative;
            z-index: 1;
        }
        [ds-ico] {
            display: block;
            font-size: rem(24);
            color: #fff;
        }

        @media (hover: hover) {
            &:hover {
                // .bg {
                //     @apply bg-blue-200;
                // }
            }
        }
        &:active {
            .bg {
                transition-duration: 0.15s;
                transform: scale(0.8);
            }
        }
        .#{$showGoTop} & {
            transform: none;
            opacity: 1;
            pointer-events: auto;
        }
    }

    // @at-root {
    //     .#{$showGoTop} #{$goTop} {
    //         transform: none;
    //         opacity: 1;
    //         pointer-events: auto;
    //     }
    // }
}
</style>
