<template>
    <div class="pageHome">
        <div class="cateSection">
            <div class="cateTitle">#general using</div>
            <div class="cateDes textNormal">
                <NuxtLink to="/" class="underline" name="BACK TO HOME PAGE">
                </NuxtLink>
                <div>
                    brand 05:
                    <span
                        :style="`background-color:${brand_05};width:10px;height:10px;display:inline-block;margin-right:5px;`"
                    ></span
                    >{{ brand_05 }}
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
                    nuxtServerInit
                </button>
            </div>
        </div>
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
                    <span v-if="minMd" class="font-serif text-orange-300">
                        DigiSalad Nuxt3 Base
                    </span>
                </ClientOnly>
            </div>
        </div>
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
        <div class="cateSection">
            <div class="cateTitle">#styling by classname from scss file</div>
            <div class="cateDes">DigiSalad Nuxt3 Base</div>
        </div>
        <div class="cateSection">
            <div class="cateTitle">
                #styling by tailwindcss classname inline directly
            </div>
            <div class="cateDes apply-tailwindcss">DigiSalad Nuxt3 Base</div>
        </div>
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
const { brand_05 } = useColor()
const store = useGlobalStore()
const device = useDevice()
</script>
<style lang="scss">
@import '@/assets/scss/page/home';
</style>
