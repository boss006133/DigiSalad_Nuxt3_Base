export interface IHomePageHero {
    type: string
    video: IHomePageHeroVideo
    slides: IHomePageHeroSlide[]
}

export interface IHomePageHeroVideo {
    url: string
    hero_logo: string
    hero_title: IMsgTranslation[]
    hero_subtitle: IMsgTranslation[]
    cta_text: IMsgTranslation[]
    cta_url: string
}

export interface IHomePageHeroSlide {
    image: string
    title: IMsgTranslation[]
    subtitle: IMsgTranslation[]
    cta_url: string
}

export enum EWidgetDataType {
    videoPlayer = 'video-player',
    imagesSlider = 'images-slider',
}
