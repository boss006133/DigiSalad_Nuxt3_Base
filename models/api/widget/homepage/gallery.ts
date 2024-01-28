export interface IHomePageGallery {
    photos: Photo[]
}

export interface Photo {
    thumbnail: string
    image: string
    type: string
    url: string
}
