<template>
    <button type="button" aria-label="open menu" @click="switchPopup" class="btn-mini-nav">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </button>
</template>
<script lang="ts" setup>
const { $Nav } = useNuxtApp()

const switchPopup = () => {
    $Nav.isShow() ? $Nav.close() : $Nav.show()
}
</script>
<style lang="scss" scoped>
.btn-mini-nav {
    width: 24px;
    aspect-ratio: 1/1;
    padding: 1px 2.5px;
    .line {
        background-color: #fff;
        border-radius: 99em;
        width: 100%;
        height: 2px;
        display: block;
        margin: 4px 0;

        transition: all 0.25s $animeCubic1;

        &:nth-child(1) {
            transform-origin: 0 50%;
        }
        &:nth-child(2) {
            transform-origin: 100% 50%;
        }
        &:nth-child(3) {
            transform-origin: 100% 50%;
        }

        &:nth-child(3) {
            width: calc(10 / 19 * 100%);
            margin-left: auto;
        }
    }
    .#{$popupNavMenu}--show & {
        .line {
            &:nth-child(1) {
                animation: line1-dance 0.4s $animeCubic1;
                animation-fill-mode: both;
            }
            &:nth-child(2) {
                animation: line2-dance 0.4s $animeCubic1;
                animation-fill-mode: both;
                animation-delay: 0.07s;
            }
            &:nth-child(3) {
                transform: scaleX(0);
            }
        }
    }
}
@keyframes line1-dance {
    0% {
        transform: none;
        transform-origin: 0 50%;
    }
    35% {
        transform: scaleX(0) scaleY(0.6);
        transform-origin: 0 50%;
    }
    36% {
        transform: rotate(0deg) translate(4px, 4px) scaleX(0);
        transform-origin: 50% 50%;
    }
    100% {
        transform: rotate(45deg) translate(4px, 4px) scaleX(1.3) scaleY(0.8);
        transform-origin: 50% 50%;
    }
}
@keyframes line2-dance {
    0% {
        transform: none;
        transform-origin: 100% 50%;
    }
    35% {
        transform: scaleX(0) scaleY(0.6);
        transform-origin: 100% 50%;
    }
    36% {
        transform: rotate(0deg) translate(-1px, 0px) scaleX(0);
        transform-origin: 50% 50%;
    }
    100% {
        transform: rotate(-45deg) translate(0px, -0.5px) scaleX(1.3) scaleY(0.8);
        transform-origin: 50% 50%;
    }
}
</style>
