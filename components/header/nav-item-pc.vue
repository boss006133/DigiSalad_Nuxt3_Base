<template>
    <div class="headerNav__item" ref="itemEl" :class="{ 'headerNav__item--active': isHovered }">
        <NuxtLink :to="localePath(item.url)" @click="$refreshPage(item.url)">
            <span class="text"> {{ name }}</span>
            <span class="active-line"></span>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
import type { Menu } from '@/models/api/global'
const { $getApiTMsg } = useNuxtApp()
const localePath = useLocalePath()
const props = defineProps({
    item: {
        type: Object as PropType<Menu>,
        default: {},
    },
})
const item = computed(() => props.item)
const itemEl = ref(null)
const isHovered = useElementHover(itemEl as any)
const name = computed(() => $getApiTMsg(props.item.title))
</script>
<style lang="scss">
$item-gap-hori: 30;
.headerNav {
}
.headerNav__list {
    display: flex;
    margin: 0 calc($item-gap-hori * 0.5 * -1 * 1px);
}
.headerNav__item {
    position: relative;
    > a {
        position: relative;
        display: flex;
        padding: 23px calc($item-gap-hori * 0.5 * 1px);
        transition: color 0.25s ease;
        .icon-down {
            transition: all 0.25s ease;
        }
        > .icon {
            position: relative;
            top: 2px;
            margin-left: 3px;
            [ds-ico] {
                display: block;
                font-size: rem(20);
                transition: transform 0.25s ease;
            }
        }
        .text {
            position: relative;
            z-index: 2;
        }
        .active-line {
            position: absolute;
            z-index: 0;
            top: 55%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100%;
            pointer-events: none;
            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 5px;
                border-radius: 99em;
                background: linear-gradient(
                    91deg,
                    theme('colors.red.primary') 0%,
                    theme('colors.blue.primary') 100%
                );
                transform: scaleX(0);
                transition: transform 0.25s ease;
            }
        }
        &.router-link-exact-active {
            // @apply text-yellow-300;
            .active-line {
                &:after {
                    transform: scaleX(1);
                }
            }
        }
    }
    &--active {
        > a {
            @apply text-red-400;
        }
    }
}
</style>
