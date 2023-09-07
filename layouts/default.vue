<template>
    <div>
        <slot />
        <!-- <NuxtWelcome /> -->
        <UiPageLoader />
    </div>
</template>
<script setup>
const route = useRoute()
</script>
