import {OctokitResponse} from "@octokit/types";
import {GithubCurrentStateOptions} from "./gitHubRepos";
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

export interface UpdateGitHubOptions extends GithubCurrentStateOptions {
    message: string,
    content: {
      hash: string,
      data: Items[] | RepoObject[]
    },
    current: OctokitResponse<any, number>
}
