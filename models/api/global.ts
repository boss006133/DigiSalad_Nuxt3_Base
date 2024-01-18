export interface IGlobel {
    meta: Meta
    enums: Enums
    widgets: Widget[]
}

export interface Meta {
    title: IMsgTranslation[]
    description: IMsgTranslation[]
    image_url: IMsgTranslation[]
}

export interface Enums {
    gender: Gender[]
    course_application_status: Status[]
    order_status: Status2[]
}

export interface Gender {
    value: number
    label: IMsgTranslation[]
}

export interface Status {
    value: number
    label: IMsgTranslation[]
}

export interface Status2 {
    value: number
    label: IMsgTranslation[]
}

export interface Widget {
    type: string
    code: string
    data: Data
}

export interface Data {
    logo?: string
    languages?: Language[]
    sign_text?: IMsgTranslation[]
    buy_text?: IMsgTranslation[]
    menu?: Menu[]
    top?: Top
    middle?: Middle
    bottom?: Bottom
}

export interface Language {
    code: string
    name: string
}

export interface Menu {
    title: IMsgTranslation[]
    url: string
    prepend_icon?: string
}

export interface Top {
    title: IMsgTranslation[]
    menu: Menu2[]
}

export interface Menu2 {
    title: IMsgTranslation[]
    url: string
}

export interface Middle {
    connections: Connections
    subscribe: Subscribe
}

export interface Connections {
    title: IMsgTranslation[]
    platforms: Platforms
}

export interface Platforms {
    linkedin: string
    instagram: string
    facebook: string
    youtube: string
}

export interface Subscribe {
    placeholder: IMsgTranslation[]
    button: IMsgTranslation[]
    subscribed: IMsgTranslation[]
    subscribed_error_message: IMsgTranslation[]
    agreement: IMsgTranslation[]
}

export interface Bottom {
    logo: string
    sub_logo: SubLogo[]
    copyright_text: IMsgTranslation[]
    terms_of_use_text: IMsgTranslation[]
    privacy_policy_text: IMsgTranslation[]
}

export interface SubLogo {
    image: string
    url: string
}
