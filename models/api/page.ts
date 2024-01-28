export interface IPage {
    meta: Meta
    widgets: Widgets[]
}

export interface Meta {
    title: IMsgTranslation[]
    description: IMsgTranslation[]
    image_url: IMsgTranslation[]
}

export interface Widgets {
    type: string
    code: string
    data: any
}
