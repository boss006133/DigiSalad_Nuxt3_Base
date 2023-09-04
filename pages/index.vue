<template>
    <div class="pageHome">
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
        <div class="cateSection">
            <div class="cateTitle">
                #using useMedia(composables) to switch element to (show & hide)
            </div>
            <div class="cateDes">
                min-md ({{ list.minMd }}px):{{ minMd }} <br />
                max-md ({{ list.maxMd }}px):{{ maxMd }} <br />
                <span v-if="maxMd" class="">DigiSalad Nuxt3 Base</span>
            </div>
        </div>
    </div>
</template>
<script setup>
const { maxMd, minMd, list } = useMedia();
</script>
<style lang="scss">
@import "@/assets/scss/page/home";
</style>
