export interface IHomePageImpacts {
    background_text: BackgroundText
    title: IMsgTranslation[]
    content: IMsgTranslation[]
    cta_text: IMsgTranslation[]
    cta_url: string
    items: Item[]
}

export interface BackgroundText {
    dark: string
    light: string
}

export interface Item {
    image: string
    title: IMsgTranslation[]
    content: IMsgTranslation[]
    cta_url: string
}
