export interface IHomePageMatchCenter {
    title: IMsgTranslation[]
    highlighted_match: HighlightedMatch
    upcoming_matches: UpcomingMatch[]
    view_match_center_cta: IMsgTranslation[]
}

export interface HighlightedMatch {
    upcoming_text: IMsgTranslation[]
    view_match_cta: IMsgTranslation[]
    match_get_ticket_cta: IMsgTranslation[]
    match_view_live_cta: IMsgTranslation[]
    match: Match
}

export interface Match {
    start_time: string
    end_time: string
    name: IMsgTranslation[]
    round: IMsgTranslation[]
    venue: Venue
    home_team: HomeTeam
    away_team: AwayTeam
    ticket_url: any
    live_url: any
}

export interface Venue {
    name: IMsgTranslation[]
    address: IMsgTranslation[]
    latitude: number
    longitude: number
}

export interface HomeTeam {
    logo: string
    name: IMsgTranslation[]
}

export interface AwayTeam {
    logo: string
    name: IMsgTranslation[]
}

export interface UpcomingMatch {
    start_time: string
    end_time: string
    name: IMsgTranslation[]
    round: IMsgTranslation[]
    venue: Venue2
    home_team: HomeTeam2
    away_team: AwayTeam2
}

export interface Venue2 {
    name: IMsgTranslation[]
    address: IMsgTranslation[]
    latitude: number
    longitude: number
}

export interface HomeTeam2 {
    logo: string
    name: IMsgTranslation[]
}

export interface AwayTeam2 {
    logo: string
    name: IMsgTranslation[]
}
