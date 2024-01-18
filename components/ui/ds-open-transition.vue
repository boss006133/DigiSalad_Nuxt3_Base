<template>
    <div class="ds-open-transition" ref="openEl">
        <span class="coverBg"></span>
    </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
import { action as actionIndex } from '@/constants/store/actions'
import * as st from '~/constants/others/session'
import { CLASSNAME_IS_READY } from '~/constants/type/className-variables'
const storeGlobal = useGlobalStore()
const error = useError()
const { hook, $gsap, $setHtmlReady } = useNuxtApp()
const { widgetsBlockState } = useWidgetsBlocksEvents()
let tlOpen: gsap.core.Timeline | null
let tlOpenQuick: gsap.core.Timeline | null
let openTimeout
const progressForOpen = 0.8
const progressForOpenQuick = 0.1
const openEl = ref() as any
const animeOpen = () => {
    let isTriggerFinished = false

    const bgCover = document.querySelector('.ds-open-transition')
    const logo = openEl.value?.querySelector('.logo__self')
    const _circleWrapEl = openEl.value?.querySelector('.circle__wrap')
    const _circleBlueSelfEl = openEl.value?.querySelector('.circle-blue-self')
    const _circleRedSelfEl = openEl.value?.querySelector('.circle-red-self')

    const tl = $gsap.timeline({
        paused: true,
        onUpdate: function () {
            if (this.progress() > progressForOpen && !isTriggerFinished) {
                isTriggerFinished = true
                storeGlobal[actionIndex.SET_SITE_OPEN_ANIMATION_DONE](true)
                $setHtmlReady()
            }
        },
    })

    tl.to(bgCover, {
        alpha: 0,
        duration: 0.5,
        ease: 'power1.in',
    })

    return tl
}
const animeOpenQuick = () => {
    let isTriggerFinished = false
    const bgCover = document.querySelector('.ds-open-transition')
    const tl = $gsap.timeline({
        paused: true,
        onUpdate: function () {
            if (this.progress() > progressForOpenQuick && !isTriggerFinished) {
                isTriggerFinished = true
                storeGlobal[actionIndex.SET_SITE_OPEN_ANIMATION_DONE](true)
                $setHtmlReady()
            }
        },
    })
    tl.to(bgCover, {
        alpha: 0,
        duration: 0.5,
        ease: 'linear',
    })

    return tl
}
const doAnimeOpen = () => {
    const sS_loadLanding = sessionStorage.getItem(st.st_loadLanding)
    if (sS_loadLanding) {
        tlOpenQuick = animeOpenQuick()
        tlOpenQuick.play().then(() => {
            onComplete()
        })
    } else {
        tlOpen = animeOpen()
        tlOpen.play().then(() => {
            onComplete()
        })
    }
}
const onComplete = () => {
    storeGlobal.isOpenTransitionFinished = true
    sessionStorage.setItem(st.st_loadLanding, 'Y')
}

onMounted(() => {
    if (error.value && !storeGlobal.isOpenTransitionFinished) {
        doAnimeOpen()
    }
})
onUnmounted(() => {
    clearTimeout(openTimeout)
    tlOpen?.kill()
})

//page error 時,不會觸發
// hook('page:finish', () => {
//     if (!storeGlobal.isOpenTransitionFinished) {
//         doAnimeOpen()
//     }
// })
watch(
    () => widgetsBlockState.loadComplete,
    async (newValue) => {
        if (!storeGlobal.isOpenTransitionFinished && newValue) {
            await nextTick()
            openTimeout = setTimeout(() => {
                doAnimeOpen()
            }, 1)
        }
    },
)
</script>
<style lang="scss">
.ds-open-transition {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    width: 100vw;
    height: 100svh;
    z-index: 9201;

    .coverBg {
        // @apply bg-blue-primary;
        // background-color: #000;
        background-color: #050a1b;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
    }
}
</style>
