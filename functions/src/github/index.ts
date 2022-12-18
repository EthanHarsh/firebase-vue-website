import {RepoResponse} from "../types";
import {checkContent} from "../utils";
import {updateJson, getFeaturedRepos} from "./repos";

export type GetFeaturedRepos = typeof getFeaturedRepos;
export {
  updateJson,
  getFeaturedRepos,
};

export const updateFeaturedRepoJson = async (featuredRepoResponse: RepoResponse, repoHash: string) => {
  const response = await updateJson(featuredRepoResponse, repoHash, "ionic_frontend/src/constants/json/featuredRepos.json", "updating featured repo json");
  return response;
};
export type UpdateFeaturedRepoJson = typeof updateFeaturedRepoJson;

export const checkFeaturedRepos = async (hash: string) => {
  const response = await checkContent(hash, {
    contentFetch: getFeaturedRepos,
    contentUpdate: updateFeaturedRepoJson,
    errorMsg: "Error checking featured repos.",
  });

  return response;
};
