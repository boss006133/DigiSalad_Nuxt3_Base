<template>
    <div class="pageDsGuide">
        <!-- back to home -->
        <NuxtLink
            :to="localePath('/')"
            class="mb-[30px] py-[6px] px-[16px] rounded-[4px] bg-slate-700 text-[12px] text-white inline-flex items-center transition hover:bg-slate-500"
            ><span class="pr-[10px]">←</span
            >{{ $t('guide.btn_to_home') }}</NuxtLink
        >

        <!-- general using -->
        <div class="cateSection">
            <div class="cateTitle">#general using</div>
            <div class="cateDes">
                <div>
                    $config.public.baseURL → {{ $config.public?.baseURL }}
                </div>
                <div>store.userName → {{ storeGlobal.userName }}</div>
                <div>store.timeNow → {{ storeGlobal.timeNow }}</div>
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
                $t('guide.recommend_for_you') →
                {{ $t('guide.recommend_for_you') }}<br />
                $t('guide.desc') → {{ $t('guide.desc') }}
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
                userAgent → {{ device.userAgent }}<br />
                isDesktop → {{ device.isDesktop }}<br />
                isIos → {{ device.isIos }}<br />
                isAndroid → {{ device.isAndroid }}<br />
                isMobile → {{ device.isMobile }}<br />
                isMobileOrTablet → {{ device.isMobileOrTablet }}<br />
                isDesktopOrTablet → {{ device.isDesktopOrTablet }}<br />
                isTablet → {{ device.isTablet }}<br />
                isWindows → {{ device.isWindows }}<br />
                isMacOS → {{ device.isMacOS }}<br />
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
        <!-- styling font-size -->
        <div class="cateSection">
            <div class="cateTitle">
                #styling font-size
                <span class="text-[#c97979] text-[16px]"
                    >預設 @screen max-lg 進行切換font-size
                </span>
            </div>
            <div class="cateDes">
                <div
                    v-for="(value, index) in keysFontSizeBase"
                    :key="index"
                    class="mb-[5px]"
                >
                    <p :class="`${value}`">DigiSalad 正文文本 {{ value }}</p>
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
        <!-- styling by RWD(@screen min-xl) from scss file -->
        <div class="cateSection">
            <div class="cateTitle">
                #styling by RWD(@screen min-xl) from scss file
            </div>
            <div class="cateDes apply-screen-minXl">DigiSalad Nuxt3 Base</div>
        </div>
        <!-- styling by tailwindcss line-clamp-{nummber} -->
        <div class="cateSection">
            <div class="cateTitle">
                #styling by tailwindcss
                <span class="text-[#c97979] text-[16px]"
                    >class="line-clamp-{nummber}"
                </span>
            </div>
            <div class="cateDes">
                <p class="line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    beatae cumque tempore eveniet quae reiciendis architecto a
                    ad distinctio nisi. Facere animi sapiente aut soluta!
                    Veniam, enim? Earum, repudiandae ducimus. A cum dolor
                    eligendi asperiores cumque obcaecati blanditiis saepe, quas
                    ducimus, magni neque nam ut facilis iusto dolores accusamus,
                    necessitatibus nihil molestiae reprehenderit reiciendis
                    atque porro! Consequuntur magnam itaque ad? Quasi ducimus
                    beatae eveniet labore. Praesentium dolores omnis ad fugiat
                    corrupti, laudantium qui labore itaque eaque placeat ipsa
                    odio? Molestias deserunt ipsum beatae illum iusto iure animi
                    alias exercitationem illo. Vero fugit, laboriosam omnis est
                    enim quod adipisci, ad veniam modi porro molestiae ipsam
                    provident cumque vel dicta neque? Voluptates assumenda sint
                    rerum rem, placeat minus possimus ad. Modi, ab. Ut tempora
                    inventore, dolores commodi quod fuga itaque a veritatis
                    error eligendi sunt, illo eveniet tenetur natus eos ipsa ab
                    sequi libero ipsum voluptas voluptatibus. Ex iusto inventore
                    totam velit.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useGlobalStore } from '~/store'
import transitionConfig from '~/helpers/transitionConfig'
import fontSizeDesktop from '~/vender/tailwindcss/fontSize_desktop.json'
const keysFontSizeBase = Object.keys(fontSizeDesktop).map((key) => {
    const name = `text-${key.substring(0, key.lastIndexOf('-'))}`
    return name
})

// 設定page meta
useMetaHead({
    title: 'DS Guide',
    description: 'DigiSalad Nuxt3 基本使用'
})

// 設定page transition
definePageMeta({
    ...transitionConfig
})

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
