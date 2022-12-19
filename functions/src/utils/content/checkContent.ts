import contentHash from "./contentHash";
import {Items, RssResponse, ErrorResponse, RepoObject, RepoResponse, GetFeaturedRepos, UpdateFeaturedRepoJson, UpdateRssJson, GetRssFeed} from "../../types";

interface Options {
    contentFetch: GetRssFeed | GetFeaturedRepos,
    contentUpdate: UpdateRssJson | UpdateFeaturedRepoJson,
    errorMsg: string,
}

interface Response {
    update: boolean
    data?: RepoObject[] | Items[]
}

export default async (hash: string, options: Options) :Promise<Response | ErrorResponse> => {
  const {errorMsg, contentFetch, contentUpdate} = options;
  const response: RssResponse | RepoResponse | ErrorResponse = await contentFetch({recent: true});
  if ((response as ErrorResponse).error) {
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
