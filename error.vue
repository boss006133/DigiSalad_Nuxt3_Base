<template>
    <NuxtLayout>
        <div class="page-error">
            <div class="media-2xl">
                <div class="error__container">
                    <div class="error__flex">
                        <div class="code-box">
                            <h2>{{ error.statusCode }}</h2>
                        </div>
                        <div class="message-box" v-if="error?.statusMessage">
                            <p>{{ error?.statusMessage }}</p>
                        </div>
                        <div class="btn-box">
                            <!-- <NuxtLink
                                class="btn btn-dark-outline btn--md btn-goBackHome"
                                @click="handleError"
                            >
                                <span class="text">Go back home</span>
                            </NuxtLink> -->
                            <UiButton
                                class="btn-secondary btn--lg btn-goBackHome"
                                @click="handleError"
                            >
                                <span class="text">Go back home</span>
                            </UiButton>
                        </div>
                    </div>
                </div>
                <!-- <button @click="handleError">Clear errors</button> -->
            </div>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
const localePath = useLocalePath()
const props = defineProps({
    // url, statusCode, statusMessage, message, description and data
    // example:{
    //   statusCode: 404,
    //   statusMessage: 'Page Not Found',
    //   data: {
    //     myCustomField: true
    //   }
    // }
    error: {
        type: Object as PropType<INuxtError>,
        default: {},
    },
})
const error = computed(() => props.error)

// 設定 meta head
useMetaHead({
    title: `${error.value?.statusMessage}`,
    description: error.value?.statusMessage,
})

const handleError = () => {
    clearError({ redirect: '/' })
}
onMounted(async () => {
    await nextTick()
})
</script>
<style lang="scss">
.page-error {
    $code-box: code-box;
    $message-box: message-box;
    $btn-box: btn-box;

    width: 100%;
    > * {
        min-height: 100%;
        display: flex;
    }
    .error__container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 60px 0;
        .#{$code-box} {
            @apply text-blue-200;
            // @include fontStyle('text-h1');
            font-size: rem(100);
            @include mediaMax('md') {
                font-size: rem(70);
            }
        }
        .#{$message-box} {
            // @include fontStyle('text-h4');
        }
        * + .#{$message-box} {
            margin-top: 10px;
            @include mediaMax('md') {
                margin-top: 5px;
            }
        }
        .#{$btn-box} {
            display: flex;
            justify-content: center;
        }
        * + .#{$btn-box} {
            margin-top: 40px;
            @include mediaMax('md') {
                margin-top: 40px;
            }
        }
    }
}
</style>
