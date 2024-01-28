import { reactive } from 'vue'

// No transition to start, set default to true.
const widgetsBlockState = reactive({
    loadComplete: false,
})
export function useWidgetsBlocksEvents() {
    const toggleWidgetsBlockComplete = (value: boolean) => {
        widgetsBlockState.loadComplete = value
    }
    return { widgetsBlockState, toggleWidgetsBlockComplete }
}
