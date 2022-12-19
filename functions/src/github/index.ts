import {checkContent} from "../utils";
import {getFeaturedRepos, updateFeaturedRepoJson} from "./repos";

export type GetFeaturedRepos = typeof getFeaturedRepos;
export * from "./repos";

export const checkFeaturedRepos = async (hash: string) => {
  const response = await checkContent(hash, {
    contentFetch: getFeaturedRepos,
    contentUpdate: updateFeaturedRepoJson,
    errorMsg: "Error checking featured repos.",
  });
  return response;
};
