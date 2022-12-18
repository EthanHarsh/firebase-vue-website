export interface Items {
    id: string,
    link: string,
    pubDate: string,
    title: string,
    image: string
}

export interface RepoObject {
    name: string,
    description: string | null,
    language: string | null,
    url: string | null,
}

export interface RepoResponse {
    data: RepoObject[]
}

export interface RssResponse {
    data: Items[]
}

export interface ErrorResponse {
    error: string
}
