<template>
    <div :class="`${data.classDefault}`" v-show="open">
        <div :class="`${data.classDefault}__container`">
            <nav class="popupNav">
                <div class="popupNav__list">
                    <NavItem v-for="(item, index) in headerNavRegroup" :key="index" :item="item" />
                </div>
                <div class="btn__container">
                    <div class="otherFn-box">
                        <div class="operation-box">
                            <div class="item">
                                <div
                                    class="language__item"
                                    v-for="(item, index) in storeGlobal.otherLanguages"
                                    :key="index"
                                >
                                    <NuxtLink class="btn-lang" :to="switchLocalePath(item.code)">
                                        <div v-html="item.nameInApi"></div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="divider">|</div>
                            <div class="item">
                                <button type="button" class="btn-search" aria-label="search">
                                    <span class="ds-ico-search"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="shop-box">
                        <NuxtLink class="btn-shop btn-hover-gradient" :to="localePath('/')">
                            <span class="text">{{ buy_text }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
        <div class="coverBg"></div>
        <div class="textBg"><span class="textBg-self">a game for all a game for all</span></div>
    </div>
</template>
<script lang="ts" setup>
import NavItem from './nav-item.vue'
import { CLASSNAME_POPUP_NAV_MENU } from '~/constants/type/className-variables'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/store'
import { usePopupStore } from '~/store/popup'
import type { Menu } from '@/models/api/global'
const { $getWindowLoco, $getApiTMsg } = useNuxtApp()
const storeGlobal = useGlobalStore()
const storePopup = usePopupStore()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { isShow_Nav } = storeToRefs(storePopup)
const data = reactive({
    closeDuration: 500,
    classDefault: CLASSNAME_POPUP_NAV_MENU,
    classActive: '--show',
    classBeforeActive: '--beforeShow',
    variablesName: '--NAV_MENU',
})
let closeTimer, subCloseTimer, openTimer
let open = ref(false)
const activeClass = `${data.classDefault}${data.classActive}`
const beforeActiveClass = `${data.classDefault}${data.classBeforeActive}`

const buy_text = computed(() => $getApiTMsg(storeGlobal.headerNavBar?.data.buy_text))
const extraNavs = [
    {
        title: storeGlobal.headerNavBar?.data.sign_text,
        url: '/login',
        prepend_icon: 'ds-ico-account',
    },
] as Menu[]
const headerNavRegroup = [...storeGlobal.headerNav, ...extraNavs] as Menu[]

watch(
    () => isShow_Nav.value,
    async (newValue) => {
        clearTimeout(openTimer)
        clearTimeout(closeTimer)
        clearTimeout(subCloseTimer)
        const winLoco = $getWindowLoco('layout')
        if (newValue) {
            winLoco && winLoco.stop()
            document.documentElement.classList.add(beforeActiveClass)
            open.value = newValue
            await nextTick()
            openTimer = setTimeout(() => {
                document.documentElement.classList.add(activeClass)
            }, 10)
        } else {
            document.documentElement.classList.remove(activeClass)
            winLoco && winLoco.start()
            closeTimer = setTimeout(async () => {
                open.value = newValue
                subCloseTimer = setTimeout(() => {
                    document.documentElement.classList.remove(beforeActiveClass)
                }, 1000)
            }, data.closeDuration)
        }
    },
)
onMounted(() => {
    const root = document.querySelector(':root') as any
    root?.style.setProperty(`${data.variablesName}__closeDuration`, `${data.closeDuration / 1000}s`)
})
</script>
<style lang="scss">
.#{$popupNavMenu} {
    position: fixed;
    z-index: 8999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: #fff;

    .#{$popupNavMenu}__container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        padding-top: 62px;
        // @include mediaMin('lg') {
        //     padding-top: 128px;
        // }
    }
    .popupNav {
        // padding: 26px 0px 0;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .popupNav__list {
        flex: 1;
        padding-bottom: 100px;
    }
    .btn__container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 8px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        backdrop-filter: blur(8px);
    }
    .btn__container {
        // @include fontStyle('text-p2');
        transform: translate(0, 20px);
        opacity: 0;
        transition: all 0.4s $animeCubic1;

        .#{$navShowClass} & {
            transform: none;
            opacity: 1;
        }

        [ds-ico] {
            display: block;
            font-size: rem(24);
        }
    }
    .operation-box {
        $gap: 20;
        display: flex;
        align-items: center;
        padding: 16px;
        > * {
            display: flex;
        }
        .divider {
            line-height: 1.25;
            font-weight: 400;
            margin-inline: calc($gap * 1px);
        }
    }
    .btn-lang {
        font-size: rem(16);
        font-weight: 400;
        line-height: 1.5;
    }
    .btn-shop {
        @apply text-body-medium-small;
        height: 44px;
        font-size: rem(14);
        font-weight: 500;
    }

    > .coverBg {
        @apply bg-blue-primary;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
        transition: all var(--NAV_MENU__closeDuration) $animeCubic2;
        transform-origin: 50% 0%;
        opacity: 0;
        transform: scaleY(0.7);
        .#{$navShowClass} & {
            opacity: 1;
            transform: none;
        }
    }

    .textBg {
        font-family: $fontFamily2;
        font-size: rem(48.7);
        line-height: 1.375;
        text-transform: uppercase;
        position: absolute;
        right: -17px;
        top: 62px;
        white-space: nowrap;
        color: rgba(255, 255, 255, 0.1);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: scaleY(-1) scaleX(-1);
        .textBg-self {
            opacity: 0;
            display: block;
            transition: opacity 0.3s ease;
            .#{$navShowClass} & {
                opacity: 1;
                transition: opacity 1.5s ease;
            }
        }
    }
}
</style>
