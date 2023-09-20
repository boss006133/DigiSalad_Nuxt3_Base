import { reactive } from 'vue'

const screenResizeState = reactive({
    resizeComplete: false,
})

export const useAfterScreenResize = () => {
    const toggleScreenResizeComplete = (value: boolean) => {
        screenResizeState.resizeComplete = value
    }

    return {
        screenResizeState,
        toggleScreenResizeComplete,
    }
}
