export interface IHomePageEvents {
    background_text: BackgroundText
    title: IMsgTranslation[]
    content: IMsgTranslation[]
    cta_text: IMsgTranslation[]
    items: Item[]
}

export interface BackgroundText {
    dark: string
    light: string
}

export interface Item {
    slug: string
    tags: Tag[]
    start_at: string
    end_at: string
    image: string
    name: IMsgTranslation[]
    location: IMsgTranslation[]
}

export interface Tag {
    slug: string
    title: IMsgTranslation[]
}
