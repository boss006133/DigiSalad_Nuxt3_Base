import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'
import arrowDownIcon from '@/components/icon/v-down.vue'
// import closeIcon from './customSVGs/close-icon.vue'

const customSvgNameToComponent: any = {
    arrowDownIcon,
}

const customSVGs: IconSet = {
    component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
}

export { customSVGs /* aliases */ }
