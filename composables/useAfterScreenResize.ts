import { reactive } from 'vue'

const screenResizeState = reactive({
    resizeComplete: false,
    resizing: 0,
})

export const useAfterScreenResize = () => {
    const toggleScreenResizeComplete = (value: boolean) => {
        screenResizeState.resizeComplete = value
    }

    const toggleScreenResizing = () => {
        screenResizeState.resizing++
    }

    return {
        screenResizeState,
        toggleScreenResizeComplete,
        toggleScreenResizing,
    }
}
