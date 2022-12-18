import contentHash from "./contentHash";
import {getRssFeed} from "../medium";
import {getFeaturedRepos, updateFeaturedRepoJson, updateRssJson} from "../github";

interface Options {
    contentFetch: typeof getRssFeed | typeof getFeaturedRepos,
    contentUpdate: typeof updateRssJson | typeof updateFeaturedRepoJson,
    errorMsg: string,
}

export interface items {
  id: string,
  link: string,
  pubDate: string,
  title: string,
  image: string
}

export interface RssResponse {
  data: items[]
}

export interface ErrorResponse {
  error: string
}

interface RepoObject {
    name: string,
    description: string | null,
    language: string | null,
    url: string | null,
}

interface RepoResponse {
  data: RepoObject[]
}

interface Response {
    update: boolean
    data?: RepoObject[] | items[]
}

export default async (hash: string, options: Options) :Promise<Response | ErrorResponse> => {
  const {errorMsg, contentFetch, contentUpdate} = options;
  const response: RssResponse | RepoResponse | ErrorResponse = await contentFetch({recent: true});
  if ((response as ErrorResponse).error || !response) {
    return {
      error: errorMsg,
    };
  }

  const cHash = contentHash((response as RssResponse | RepoResponse).data);

  if (cHash !== hash) {
    await contentUpdate((response as RssResponse & RepoResponse), cHash);
    return {
      update: true,
      data: (response as RssResponse | RepoResponse).data,
    };
  } else {
    return {
      update: false,
    };
  }
};
