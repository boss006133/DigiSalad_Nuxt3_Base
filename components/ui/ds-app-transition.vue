<template>
    <div class="ds-app-transition"></div>
</template>
<script setup></script>
<style lang="scss">
.ds-app-transition {
    $duration_open: var(--duration_open);
    $duration_close: var(--duration_close);
    //@apply bg-slate-100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: calc(var(--vh) * 100);
    background: rgb(0, 0, 0, 0.6);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: opacity $duration_close cubic-bezier(0.77, 0, 0.175, 1) 0.2s,
        visibility $duration_close cubic-bezier(0.77, 0, 0.175, 1) 0.2s;

    &.is-active {
        opacity: 1;
        visibility: visible;
        transition: opacity $duration_open cubic-bezier(0.165, 0.84, 0.44, 1),
            visibility $duration_open cubic-bezier(0.165, 0.84, 0.44, 1);
    }
}
</style>
