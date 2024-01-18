export interface IHomePageCountdown {
    image: string
    title: IMsgTranslation[]
    subtitle: Subtitle
    content: IMsgTranslation[]
    countdown_message: IMsgTranslation[]
    units: Units
    target_time: string
    button: Button
    ticket_button: Button
}

export interface Subtitle {
    first: IMsgTranslation[]
    second: IMsgTranslation[]
}

export interface Units {
    day: IMsgTranslation[]
    hour: IMsgTranslation[]
    min: IMsgTranslation[]
    sec: IMsgTranslation[]
}

export interface Button {
    text: IMsgTranslation[]
    url: string
}
