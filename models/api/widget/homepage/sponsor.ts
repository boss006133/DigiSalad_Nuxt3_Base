export interface IHomePageSponsor {
    title: IMsgTranslation[]
    sponsors: Sponsors
    suppliers: Suppliers
}

export interface Sponsors {
    title: IMsgTranslation[]
    items: Item[]
}

export interface Suppliers {
    title: IMsgTranslation[]
    items: Item[]
}

export interface Item {
    image: string
    name: IMsgTranslation[]
    url: string
}
