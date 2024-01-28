<template>
    <NuxtLink class="ds-button btn" :loading="loading" :disabled="disabled || null" v-ripple>
        <div class="prepend-icon-box" v-if="prependIcon">
            <span :class="prependIcon" ds-ico></span>
        </div>
        <div class="text-box" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="append-icon-box" v-if="appendIcon">
            <span :class="appendIcon" ds-ico></span>
        </div>
        <div class="o-loading-icon" v-if="loading">
            <span class="icon-loading">
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
            </span>
        </div>
    </NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: () => false,
    },
    disabled: {
        type: Boolean,
        default: () => false,
    },
    appendIcon: {
        type: String,
        default: () => '',
    },
    prependIcon: {
        type: String,
        default: () => '',
    },
})
const loading = computed(() => props.loading)
const disabled = computed(() => props.disabled)
const clickDisabled = computed(() => disabled || loading)
const emit = defineEmits(['click'])
const click = () => {
    emit('click')
}
</script>
<style lang="scss" scoped></style>
