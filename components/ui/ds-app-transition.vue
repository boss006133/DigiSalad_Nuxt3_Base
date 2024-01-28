<template>
    <div class="ds-app-transition">
        <span class="bg-borad">
            <span class="t-borad"></span>
        </span>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.ds-app-transition {
    $duration_open: var(--duration_open);
    $duration_close: var(--duration_close);
    //@apply bg-slate-100;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    //background: rgb(0, 0, 0, 0.6);
    z-index: 9200;
    opacity: 0;
    visibility: hidden;
    // transition: opacity $duration_close cubic-bezier(0.77, 0, 0.175, 1) 0.2s,
    //     visibility $duration_close cubic-bezier(0.77, 0, 0.175, 1) 0.2s;

    &.is-active {
        opacity: 1;
        visibility: visible;
        // transition: opacity $duration_open cubic-bezier(0.165, 0.84, 0.44, 1),
        //     visibility 0s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .bg-borad {
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        // width: 111.25vw;
        // height: 108.68055vw;

        width: 100vw;
        height: 100vh;
        height: 100svh;
        display: block;
    }
    .t-borad {
        @apply bg-slate-200;
        // border-radius: 23vw 23vw;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        //transform: translate(0px, 77%);
    }
}
</style>
