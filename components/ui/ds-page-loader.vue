<template>
    <!-- page loader -->
    <div class="ds-page-loader" v-if="storeGlobal.pageLoading">
        <div class="ds-page-loader__bg"></div>
        <div class="spinner-outer">
            <svg class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle
                    class="path"
                    fill="none"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="30"
                ></circle>
            </svg>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from '~/store'
const storeGlobal = useGlobalStore()
</script>
<style lang="scss" scoped>
$offset: 220;
$duration: 1.4s;
.ds-page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9101;
    &__bg {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.2;
    }
    // &__img {
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    // }
}
.spinner-outer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.spinner {
    width: 65px;
    height: 65px;
    animation: rotator $duration linear infinite;

    @screen lt-md {
        width: 40px;
        height: 40px;
    }
}
.path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite;
    stroke-width: 4px;
    @apply stroke-blue-400;
}
@keyframes rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}
@keyframes dash {
    0% {
        stroke-dashoffset: $offset;
    }
    50% {
        stroke-dashoffset: calc($offset / 4);
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: $offset;
        transform: rotate(450deg);
    }
}
</style>
