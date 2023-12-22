import { gsap } from 'gsap'
interface AppTransition {
    durationOpen: number //seconds
    durationClose: number //seconds
    //   update: (options: ThumbMotion) => void
}
class AppTransition {
    private appTransitionClass = 'ds-app-transition'
    durationOpen = 0.25
    durationClose = 0.6
    constructor(options?: Partial<AppTransition>) {
        Object.assign(this, options)

        //process.client && this.init()
    }

    //取得動畫容器
    private get container(): HTMLElement | null {
        const c = document.querySelector(`.${this.appTransitionClass}`) as any
        return c
    }

    public init = () => {
        const el = this.container
        el?.style.setProperty('--duration_open', `${this.durationOpen}s`)
        el?.style.setProperty('--duration_close', `${this.durationClose}s`)
    }

    //過場動畫:開始
    public open = () => {
        const el = this.container
        const _t = gsap.timeline({
            paused: true,
            duration: this.durationOpen,
            onStart: () => {
                el?.classList.add('is-active')
            },
        })
        //.set(el, { visibility: 'visible', autoAlpha: 0 })
        //.to(el, { autoAlpha: 1 })

        return _t
    }

    //過場動畫:結束
    public close = () => {
        const el = this.container
        const _t = gsap.timeline({
            paused: true,
            duration: this.durationClose,
            onStart: () => {
                el?.classList.remove('is-active')
            },
            // onComplete: () => {
            //     gsap.set(el, { visibility: 'hidden' })
            // },
        })
        //.to(el, { autoAlpha: 0})
        return _t
    }
}

export const useAppTransition = () => {
    const appTransition = new AppTransition()
    return {
        ...appTransition,
    }
}
