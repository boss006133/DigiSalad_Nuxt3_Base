import type { FunctionDirective /* or ObjectDirective */ } from '@vue/runtime-core'

const mediaArray = [
    'min-xs',
    'max-xs',
    'min-sm',
    'max-sm',
    'min-ms',
    'max-ms',
    'min-md',
    'max-md',
    'min-lg',
    'max-lg',
    'min-2lg',
    'max-2lg',
    'min-xl',
    'max-xl',
    'min-2xl',
    'max-2xl',
    'min-3xl',
    'max-3xl',
    'min-4xl',
    'max-4xl',
    'min-5xl',
    'max-5xl',
    'min-6xl',
    'max-6xl',
    'min-7xl',
    'max-7xl',
] as const
type MediaRanges = (typeof mediaArray)[number]
type Media = Partial<Record<MediaRanges, ScrollTrigger.StaticVars>>
export type GScrollTriggerParams = {
    options?: ScrollTrigger.StaticVars
    media?: Media
    delay?: number
}

export const vGScrollTrigger: FunctionDirective<HTMLElement, GScrollTriggerParams> = () => {}
