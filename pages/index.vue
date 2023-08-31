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
    </div>
</template>
<script setup></script>
<style lang="scss">
@import "@/assets/scss/page/home";
</style>
