<template>
    <!-- footer -->
    <footer>
        <div class="media-xl">
            <div class="footer__container">
                <span class="sample text-white py-[16px] block">Footer</span>
            </div>
        </div>
        <div class="coverBg"></div>
    </footer>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
import type { Data } from '@/models/api/global'
const { $getApiTMsg } = useNuxtApp()
const storeGlobal = useGlobalStore()
const localePath = useLocalePath()
const form = reactive({
    email: '',
    agree_chk: false,
})

type TData = Pick<Data, 'top' | 'middle' | 'bottom'>
const data = computed((): TData | undefined => storeGlobal.footerBar?.data)

const top = reactive({
    title: $getApiTMsg(data.value?.top?.title),
})
const middle = reactive({
    connections: {
        title: $getApiTMsg(data.value?.middle?.connections.title),
        platforms: {
            linkedin: data.value?.middle?.connections.platforms.linkedin,
            instagram: data.value?.middle?.connections.platforms.instagram,
            facebook: data.value?.middle?.connections.platforms.facebook,
            youtube: data.value?.middle?.connections.platforms.youtube,
        },
    },
    subscribe: {
        placeholder: $getApiTMsg(data.value?.middle?.subscribe.placeholder),
        button: $getApiTMsg(data.value?.middle?.subscribe.button),
        subscribed: $getApiTMsg(data.value?.middle?.subscribe.subscribed),
        subscribed_error_message: $getApiTMsg(
            data.value?.middle?.subscribe.subscribed_error_message,
        ),
        agreement: $getApiTMsg(data.value?.middle?.subscribe.agreement),
    },
})
const bottom = reactive({
    logo: data.value?.bottom?.logo,
    sub_logo: data.value?.bottom?.sub_logo,
    copyright_text: $getApiTMsg(data.value?.bottom?.copyright_text),
})
</script>
