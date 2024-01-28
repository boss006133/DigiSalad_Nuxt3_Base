export interface IHomePageNews {
    items: Item[]
    title: IMsgTranslation[]
    all_news_text: IMsgTranslation[]
}

export interface Item {
    slug: string
    time: string
    image: string
    title: IMsgTranslation[]
    category_name: IMsgTranslation[]
}
