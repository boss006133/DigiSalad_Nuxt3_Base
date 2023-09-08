<template>
    <div class="pageDsGuide">
        <!-- back to home -->
        <NuxtLink
            to="/"
            class="mb-[30px] py-[6px] px-[16px] rounded-[4px] bg-slate-700 text-[12px] text-white inline-flex items-center transition hover:bg-slate-500"
            ><span class="pr-[10px]">←</span
            >{{ $t('error.button_text') }}</NuxtLink
        >
        <!-- general using -->
        <div class="cateSection">
            <div class="cateTitle">#general using</div>
            <div class="cateDes">
                <NuxtLink to="/" class="underline" name="BACK TO HOME PAGE">
                </NuxtLink>
                <div>
                    brand 05:
                    <span
                        class="mr-[5px] w-[10px] h-[10px] inline-block bg-brand-05"
                    ></span
                    >{{ colors.brand_05.value }}
                </div>
                <div>$config.public.baseURL: {{ $config.public?.baseURL }}</div>
                <div>store.userName: {{ storeGlobal.userName }}</div>
                <div>store.timeNow: {{ storeGlobal.timeNow }}</div>
                <button
                    type="button"
                    @click="storeGlobal.nuxtServerInit"
                    style="
                        border-radius: 5px;
                        background-color: #04c7cd;
                        color: white;
                        padding: 5px 12px;
                        margin-top: 10px;
                    "
                >
                    nuxtServerInit</button
                ><span class="ml-[5px]" style="color: #04c7cd"
                    >(check on chrome devtool 'Network => Fetch/XHR')</span
                >
            </div>
        </div>
        <!-- @nuxtjs/i18n -->
        <div class="cateSection">
            <div class="cateTitle">
                #useI18n (<a
                    class="link-external"
                    href="https://v8.i18n.nuxtjs.org/"
                    target="_blank"
                    >@nuxtjs/i18n</a
                >)
            </div>
            <div class="cateDes">
                <div class="flex items-center mb-[20px]">
                    lang:
                    <div class="inline-flex items-center pl-[10px]">
                        <NuxtLink
                            v-for="item in locales"
                            :key="item.code"
                            class="mr-3 font-medium leading-[1.3] last-of-type:mr-0"
                            :class="
                                locale !== item.code ? 'hover:!text-black' : {}
                            "
                            :style="
                                locale === item.code
                                    ? {
                                          color: '#04c7cd',
                                          cursor: 'default'
                                      }
                                    : {
                                          color: '#bbbbbb'
                                      }
                            "
                            :to="switchLocalePath(item.code)"
                        >
                            <div v-html="item.name"></div>
                        </NuxtLink>
                    </div>
                </div>
                $t('text.recommend_for_you'): {{ $t('text.recommend_for_you')
                }}<br />
                $t('error.desc'): {{ $t('error.desc') }}
                <div class="mt-[10px] text-[14px]" style="color: #f7b55e">
                    ※(Switching language will tigger
                    <span
                        style="
                            border-radius: 3px;
                            background-color: #04c7cd;
                            color: white;
                            padding: 3px 12px;
                        "
                        >nuxtServerInit</span
                    >
                    again)
                </div>
            </div>
        </div>
        <!-- @nuxtjs/device -->
        <div class="cateSection">
            <div class="cateTitle">
                #useDevice (<a
                    class="link-external"
                    href="https://nuxt.com/modules/device"
                    target="_blank"
                    >@nuxtjs/device</a
                >)
            </div>
            <div class="cateDes">
                userAgent: {{ device.userAgent }}<br />
                isDesktop: {{ device.isDesktop }}<br />
                isIos: {{ device.isIos }}<br />
                isAndroid: {{ device.isAndroid }}<br />
                isMobile: {{ device.isMobile }}<br />
                isMobileOrTablet: {{ device.isMobileOrTablet }}<br />
                isDesktopOrTablet: {{ device.isDesktopOrTablet }}<br />
                isTablet: {{ device.isTablet }}<br />
                isWindows: {{ device.isWindows }}<br />
                isMacOS: {{ device.isMacOS }}<br />
                .<br />
                .<br />
                .
            </div>
        </div>
        <!-- useMedia (composables & injection) -->
        <div class="cateSection">
            <div class="cateTitle">
                #useMedia (composables & injection) &nbsp;&nbsp;底層使用
                <a
                    class="link-external"
                    href="https://nuxt.com/modules/nuxt-viewport"
                    target="_blank"
                    >nuxt-viewport</a
                >
            </div>
            <div class="cateDes">
                <ClientOnly>
                    <div>
                        window width → {{ winWidth }}<br />
                        window height → {{ winHeight }}
                    </div>
                </ClientOnly>
                <br />
                $useMedia.max('xl') → {{ $useMedia.max('xl') }}<br />
                $useMedia.min('2xl') → {{ $useMedia.min('2xl') }}<br />
                <div class="breakpoint__watch whitespace-pre-line">
                    Breakpoint updated:<br />
                    <div class="breakpoint__log">
                        <p v-if="!breakpointUpdateLog">
                            start to resize window to see log
                        </p>
                        {{ breakpointUpdateLog }}
                    </div>
                </div>
            </div>
        </div>
        <!-- useColor (composables) -->
        <div class="cateSection">
            <div class="cateTitle">#useColor (composables)</div>
            <div class="cateDes">
                <div
                    class="flex items-center"
                    v-for="(item, key, index) in colors"
                    :key="index"
                >
                    <span
                        class="cube mr-[6px] w-[15px] h-[15px] block"
                        :style="`background-color:${item.value};`"
                    ></span>
                    <span class="hex" :style="`color:${item.value};`">{{
                        item.value
                    }}</span>
                    <span class="name ml-[20px] text-[14px]">{{ key }}</span>
                </div>
            </div>
        </div>
        <!-- styling by classname from scss file -->
        <div class="cateSection">
            <div class="cateTitle">#styling by classname from scss file</div>
            <div class="cateDes !text-[25px]" style="color: #00c6ce">
                DigiSalad Nuxt3 Base
            </div>
        </div>
        <!-- styling by tailwindcss classname inline directly -->
        <div class="cateSection">
            <div class="cateTitle">
                #styling by tailwindcss classname inline directly
            </div>
            <div class="cateDes apply-tailwindcss">DigiSalad Nuxt3 Base</div>
        </div>
        <!-- styling by RWD(@screen xl) from scss file -->
        <div class="cateSection">
            <div class="cateTitle">
                #styling by RWD(@screen xl) from scss file
            </div>
            <div class="cateDes apply-screen-xl">DigiSalad Nuxt3 Base</div>
        </div>
    </div>
</template>
<script setup>
import transitionConfig from '~/helpers/transitionConfig'
definePageMeta({
    pageTransition: transitionConfig
})
import { useGlobalStore } from '~/store'
const { width: winWidth, height: winHeight } = useWindowSize()
const colors = useColor()
const storeGlobal = useGlobalStore()
const device = useDevice()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

//#region viewport
// const { $viewport } = useNuxtApp()
const viewport = useViewport()
let breakpointUpdateLog = ref('')
onMounted(() => {
    const El_breakpointLog = document.querySelector('.breakpoint__log')

    watch(viewport.breakpoint, async (newBreakpoint, oldBreakpoint) => {
        const r = `${oldBreakpoint} -> ${newBreakpoint}\r\n`
        breakpointUpdateLog.value += r
        await nextTick()
        El_breakpointLog.scrollTo({ top: El_breakpointLog.scrollHeight })
    })
})
//#endregion

//#region exemple: 在 onMounted 內使用 useApiFetch
// const datas = ref(null)
// onMounted(async () => {
//     await nextTick()
//     const { data } = await useApiFetch('global/global')
//     datas.value = data
//     console.warn('datas.value', datas.value)
// })
//#endregion

//#region useTransition
const { transitionState } = useTransition()
//監聽 page transition complete
watch(
    () => transitionState.transitionComplete,
    (newValue) => {
        if (newValue) {
            //page transition complete
            console.warn('page transition complete')
        }
    }
)
//#endregion
</script>
<style lang="scss">
@import '@/assets/scss/page/ds-guide';
</style>
