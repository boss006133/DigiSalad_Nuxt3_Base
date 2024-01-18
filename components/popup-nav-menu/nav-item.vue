<template>
    <div class="popupNav__item" ref="itemEl" :class="{ 'popupNav__item--active': isSubMenuOpen }">
        <div
            class="link-outer"
            :class="{
                'router-link-exact-active': isRouteActive(item.url),
                'has-list': hasList,
            }"
        >
            <UiLink
                :class="{ hasPrependIcon: item.prepend_icon }"
                :prepend-icon="item.prepend_icon"
                v-bind="{ to: localePath(item.url) }"
                v-ripple="{ class: 'ripple-slate-400' }"
            >
                <span class="text-outer">
                    <span class="text"> {{ name }}</span>
                </span>
            </UiLink>
            <!-- <UiLink
                append-icon="ds-ico-arrow-right"
                v-bind="{ to: localePath(item.url) }"
                @click="$refreshPage(item.url)"
                v-ripple="{ class: 'ripple-slate-200' }"
            >
                <span class="text-outer">
                    <span class="text"> {{ name }}</span>
                </span>
            </UiLink> -->
            <!-- <span class="icon" v-if="hasList" @click="switchSubMenu">
                <span class="ds-ico-angle-down" ds-ico></span>
            </span> -->
        </div>
        <!-- <div class="popupNavSub" v-if="hasList">
            <div class="popupNavSub__container">
                <div class="popupNavSub__list">
                    <div
                        class="popupNavSub__item"
                        v-for="(sItem, sIndex) in item.list"
                        :key="sIndex"
                        v-ripple="{ class: 'ripple-slate-200' }"
                    >
                        <NuxtLink
                            :to="localePath(`${item.path}${sItem.path}`)"
                            @click="$refreshPage(`${item.path}${sItem.path}`)"
                        >
                            <span :class="['icon', `${sItem.icon}`]"></span>
                            <span class="text">
                                {{ sItem.name }}
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import type { Menu } from '@/models/api/global'
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
const { $refreshPage, $getToRealPath, $Nav, $gsap, $getApiTMsg } = useNuxtApp()
const route = useRoute()
const localePath = useLocalePath()

const props = defineProps({
    item: {
        type: Object as PropType<Menu>,
        default: {},
    },
})
const item = computed(() => props.item)
const name = computed(() => $getApiTMsg(item.value.title))
const itemEl = ref<HTMLElement>()
let isSubMenuOpen = ref(false)
// const isHovered = useElementHover(itemEl)
//父route是否啟用
const isRouteActive = (path): boolean => {
    let r = false
    const curRouteArray: Array<any> = $getToRealPath(route.path).split('/')
    const targetRouteArray: Array<any> = $getToRealPath(path).split('/')
    if (targetRouteArray[1] === curRouteArray[1]) r = true
    return r
}

const hasList = computed(() => {
    return false
})

const collapseTl = () => {
    const popupNavSub = itemEl.value?.querySelector('.popupNavSub') as HTMLElement
    if (!popupNavSub)
        return $gsap.timeline({
            paused: true,
        })
    popupNavSub.style.display = 'block'
    const h = popupNavSub.clientHeight
    popupNavSub.style.display = ''
    const tl = $gsap.timeline({
        paused: true,
    })
    tl.to(popupNavSub, {
        height: 0,
        display: 'block',
        visibility: 'visible',
        overflow: 'hidden',
        duration: 0,
        onReverseComplete: function () {
            $gsap.set(popupNavSub, {
                height: '',
            })
        },
    }).to(popupNavSub, {
        height: h,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power2.inOut',
    })
    return tl
}
const collapse = (open: boolean) => {
    if (open) {
        collapseTl().play()
    } else {
        collapseTl().progress(1).reverse()
    }
}
const switchSubMenu = () => {
    isSubMenuOpen.value = !isSubMenuOpen.value
    collapse(isSubMenuOpen.value)
}
watch(
    () => $Nav.isShow(),
    (newValue) => {
        if (!newValue) {
            var popupNavSub = itemEl.value?.querySelector('.popupNavSub') as HTMLElement
            if (popupNavSub) {
                $gsap.set(popupNavSub, {
                    display: 'none',
                    height: '',
                })
            }
        } else {
            isSubMenuOpen.value = false
        }
    },
)

onMounted(() => {})
</script>

<style lang="scss">
$link-pad-h: 16;
$link-pad-v: 40;
.popupNav {
}
.popupNav__list {
    display: flex;
    flex-direction: column;
    // margin: -20px 0;
    padding-top: 12px;
    margin-top: -6px;
    overflow-y: auto;
    /* Handle */
    &::-webkit-scrollbar-thumb {
        @apply bg-slate-200;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        @apply bg-slate-300;
    }
}
.popupNav__item {
    // @include fontStyle('text-h4');
    position: relative;
    @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
            .icon-down,
            .text,
            [ds-ico] {
                .#{$navShowClass} & {
                    transition: transform 0.5s $animeCubic4, opacity 0.4s ease;
                    transition-delay: 0.06s * $i;
                }
            }
            .link-outer {
                .#{$navShowClass} & {
                    &:after {
                        transition: opacity 0.8s ease, transform 0.8s ease;
                        transition-delay: 0.06s * $i;
                    }
                }
            }
        }
    }
    .link-outer {
        display: flex;
        // overflow: hidden;
        position: relative;
        display: flex;
        transition: background-color 0.25s ease;
        > a {
            flex: 1;
            padding: calc($link-pad-v * 0.5 * 1px) calc($link-pad-h * 1px);
            justify-content: flex-start;
            @include fontStyle('text-body-medium');

            &:not(.hasPrependIcon) {
                padding-left: calc(($link-pad-h + 8) * 1px);
            }
        }
        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            left: -10px;
            top: 50%;
            height: 58%;
            width: 90%;
            // background-color: red;
            background: linear-gradient(
                110deg,
                theme('colors.red.primary') 26.94%,
                theme('colors.blue.primary') 112.28%
            );
            display: block;
            filter: blur(15px);
            pointer-events: none;
            opacity: 0;
            transform: translateY(-50%) scaleY(0) scaleX(0.4);
            transform-origin: 0 50%;
        }
        .text-outer {
            // overflow: hidden;
            display: block;
        }
        .prepend-icon-box {
            overflow: hidden;
        }
        .icon-down,
        .text,
        [ds-ico] {
            display: block;
            transform-origin: 50% 10%;
            transform: translate3d(0, -15px, 0) scaleY(0);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;

            .#{$navShowClass} & {
                transform: none;
                opacity: 1;
            }
        }
        .icon {
            cursor: pointer;
            position: relative;
            top: 2px;
            margin-left: 3px;
            width: 24px;
            height: 24px;
            align-self: center;
            overflow: hidden;
            transition: all 0.25s ease;
        }
        &.has-list {
            justify-content: space-between;
            padding-right: calc($link-pad-h * 1px);
            a {
                padding-right: 0;
            }
        }
        &.router-link-exact-active {
            // @apply text-blue-400 #{!important};

            .#{$navShowClass} & {
                // background-color: rgba(37, 66, 109, 0.2);
                &:after {
                    opacity: 1;
                    transform: translateY(-50%);
                }
            }
        }

        @media (hover: hover) {
            &:hover {
                &:not(.router-link-exact-active) {
                    color: theme('colors.red.primary');
                }
            }
        }
    }

    &--active {
        .link-outer {
            .icon {
                transform: rotate(-180deg);
            }
        }
    }
}
.popupNavSub {
    position: relative;

    width: 100%;
    // opacity: 0;
    // transform: translate(0, 10px);
    display: none;
    //pointer-events: none;
    //transition: all 0.25s ease;
    &--active {
        //display: block;
        // opacity: 1;
        // transform: none;
        //pointer-events: all;
    }
}
.popupNavSub__container {
    padding: 4px 0 20px;
}
.popupNavSub__list {
    display: flex;
    flex-direction: column;
    margin-top: -12px;
}
.popupNavSub__item {
    // @include fontStyle('text-p1');
    position: relative;
    width: 100%;
    > a {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        padding: 12px calc($link-pad-h * 1px);
        transition: all 0.25s ease;
        > .text {
            padding-left: 10px;
        }
        > .icon {
            @apply text-blue-400;
            display: block;
            width: 24px;
            min-width: 24px;
            aspect-ratio: 1/1;
        }
        &:after {
            content: '';
            @apply bg-slate-50;
            display: block;
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: 8px;
            opacity: 0;
            transform: translate(0, 10px);
            transition: all 0.25s ease;
        }

        &.router-link-exact-active {
            @apply text-yellow-300;
        }

        @media (hover: hover) {
            &:hover {
                &:after {
                    transform: none;
                    opacity: 1;
                }
            }
        }
    }
}
</style>
