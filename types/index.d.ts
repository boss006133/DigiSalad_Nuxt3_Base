import { vGScrollTrigger } from '@/models/directive'
export {}

declare global {
    interface Window {
        LocomotiveScroll: any
        globalTimeout: Array<NodeJS.Timeout>
        YT: any
    }
    interface Number {
        pad: (size: number) => string
    }
    interface IMsgTranslation {
        locale: string
        message: string
    }
    interface INuxtError {
        url: string
        statusCode: number
        statusMessage: string
        message: string
        description: string
        data: any
    }
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        vGScrollTrigger: typeof vGScrollTrigger
    }
}
