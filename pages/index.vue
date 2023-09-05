<template>
    <div class="pageHome">
        <!-- general using -->
        <div class="cateSection">
            <div class="cateTitle">#general using</div>
            <div class="cateDes textNormal">
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
                <div>store.userName: {{ store.userName }}</div>
                <div>store.timeNow: {{ store.timeNow }}</div>
                <button
                    type="button"
                    @click="store.nuxtServerInit"
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
            <div class="cateTitle">#useI18n (@nuxtjs/i18n)</div>
            <div class="cateDes textNormal">
                <div>
                    lang:
                    <div class="inline-flex items-center">
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
                                          cursor: 'default',
                                      }
                                    : {
                                          color: '#bbbbbb',
                                      }
                            "
                            :to="switchLocalePath(item.code)"
                        >
                            <div v-html="item.name"></div>
                        </NuxtLink>
                    </div>
                </div>
                <br />
                $t('error.desc'): {{ $t('error.desc') }}
            </div>
        </div>
        <!-- @nuxtjs/device -->
        <div class="cateSection">
            <div class="cateTitle">#useDevice (@nuxtjs/device)</div>
            <div class="cateDes textNormal">
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
        <!-- useColor(composables) -->
        <div class="cateSection">
            <div class="cateTitle">#useColor(composables)</div>
            <div class="cateDes textNormal">
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
        <!-- useMedia(composables) -->
        <div class="cateSection">
            <div class="cateTitle">
                #using useMedia(composables) to switch element(v-if) to show or
                hide
            </div>
            <div class="cateDes">
                <ClientOnly>
                    <div class="text-black text-p2-d">
                        min-md ({{ list.minMd }}px):{{ minMd }} <br />
                        max-md ({{ list.maxMd }}px):{{ maxMd }} <br />
                    </div>
                    <span v-show="minMd" class="font-serif text-orange-300">
                        DigiSalad Nuxt3 Base minMd
                    </span>
                </ClientOnly>
            </div>
        </div>
        <!-- styling by classname from scss file -->
        <div class="cateSection">
            <div class="cateTitle">#styling by classname from scss file</div>
            <div class="cateDes">DigiSalad Nuxt3 Base</div>
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
import { useGlobalStore } from '~/store'
const { maxMd, minMd, list } = useMedia()
const colors = useColor()
const store = useGlobalStore()
const device = useDevice()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

/**
 * exemple: 在 onMounted 內使用 useApiFetch
 */
// const datas = ref(null)
// onMounted(async () => {
//     await nextTick()
//     const { data } = await useApiFetch('global/global')
//     datas.value = data
// })
</script>
<style lang="scss">
@import '@/assets/scss/page/home';
</style>
