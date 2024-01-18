import { gsap } from 'gsap'
import colors from '@/vender/unocss/colors.json'

interface AppTransition {
    durationOpen: number //seconds
    durationClose: number //seconds
    //   update: (options: ThumbMotion) => void
}
class AppTransition {
    private appTransitionClass = 'ds-app-transition'
    private activeClass = 'is-active'
    durationOpen = 0.8
    durationClose = 0.7
    constructor(options?: Partial<AppTransition>) {
        Object.assign(this, options)

        process.client && this.init()
    }

    //取得動畫容器
    private get container(): HTMLElement | null {
        const _this = this
        const c = document.querySelector(`.${_this.appTransitionClass}`) as any
        return c
    }

    private init = () => {
        const _this = this
        // const el = _this.container
        // el?.style.setProperty('--duration_open', `${_this.durationOpen}s`)
        // el?.style.setProperty('--duration_close', `${_this.durationClose}s`)
    }

    //過場動畫:開始
    public open = () => {
        const _this = this
        const el = _this.container
        const board = el?.querySelector(`.t-borad`) as HTMLElement
        const locoInner = document.querySelector('.locomotive-layout') as HTMLElement
        const header = document.querySelector('header')
        const clipPath = () => {
            const winW = window.innerWidth

            return `polygon(0 100%, ${winW * 0.2}px 0%, 100% 0%, 100% 100%)`
        }

        const resetCircleOptions = {
            alpha: 0,
            scaleX: 0.25,
            transformOrigin: '100% 50%',
            duration: 0,
            backgroundColor: colors.blue.primary,
        }
        const resetLocoInnerOptions = {
            alpha: 1,
            duration: 0,
        }
        const _t = gsap.timeline({
            paused: true,
            onStart: function () {
                el?.classList.add(_this.activeClass)
            },
            onReverseComplete: function () {
                el?.classList.remove(_this.activeClass)
            },
        })
        _t.set(board, resetCircleOptions)
        _t.set(locoInner, resetLocoInnerOptions)
        if (!locoInner) {
            _t.totalDuration(0)
            return _t
        }
        _t.set(board, resetCircleOptions)
            .set([locoInner], resetLocoInnerOptions)
            .to(board, { alpha: 1, ease: 'none', duration: _this.durationOpen * 0.2 }, 0)
            .to(
                board,
                {
                    scaleX: 1,
                    backgroundColor: colors.blue.primary,
                    ease: 'power2.inOut',
                },
                0,
            )
            .to(
                board,
                {
                    keyframes: {
                        '0%': {
                            clipPath,
                        },
                        '100%': {
                            clipPath: 'polygon(0 100%, 0% 0%, 100% 0%, 100% 100%)',
                        },
                    },
                    ease: 'power2.inOut',
                    duration: _this.durationOpen * 0.9,
                },
                0,
            )
            .to(
                [locoInner, header],
                {
                    alpha: 0,
                    ease: 'power2.inOut',
                },
                0,
            )

        _t.totalDuration(_this.durationOpen)
        return _t
    }

    //過場動畫:結束
    public close = () => {
        const _this = this
        const el = _this.container
        const board = el?.querySelector(`.t-borad`) as HTMLElement
        const locoInner = document.querySelector('.locomotive-layout') as HTMLElement
        const header = document.querySelector('header')

        const clipPathReset = () => {
            return `polygon(0 100%, 0% 0%, 100% 0%, 100% 100%)`
        }
        const clipPath = () => {
            const winW = window.innerWidth
            const p = 0.5
            const point = ((winW * (1 - p)) / winW) * 100
            return `polygon(0 100%, 0% 0%, 100% 0%, ${point}% 100%)`
        }

        const resetCircleOptions = {
            transformOrigin: '0 50%',
            xPercent: 0,
            scaleX: 1,
            alpha: 1,
            backgroundColor: colors.blue.primary,
        }

        //let isTriggerFinished = false
        const _t = gsap.timeline({
            paused: true,
            onStart: function () {
                el?.classList.add(_this.activeClass)
            },
            onComplete: function () {
                el?.classList.remove(_this.activeClass)
                gsap.set(locoInner, { clearProps: 'all' })
            },
        })
        if (!locoInner) {
            _t.totalDuration(0)
            return _t
        }
        _t.set(board, resetCircleOptions)
            .set([locoInner], {
                alpha: 0,
            })
            .to(
                board,
                {
                    keyframes: {
                        '0%': {
                            clipPath: clipPathReset,
                        },
                        '90%': {
                            clipPath,
                        },
                        '100%': {
                            clipPath: clipPathReset,
                            ease: 'power2.in',
                        },
                    },
                },
                0,
            )
            .to(board, { scaleX: 0, ease: 'power2.inOut' }, 0)
            .to([locoInner, header], { alpha: 1, ease: 'power2.inOut' }, 0)

        _t.totalDuration(_this.durationClose)

        return _t
    }
}

export const useAppTransition = () => {
    const appTransition = new AppTransition()
    return {
        ...appTransition,
    }
}
