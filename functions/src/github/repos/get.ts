import octokit from "../config";
import {GithubCurrentStateOptions, RepoObject} from "../../types";

export const getCurrentRepoState = async (options: GithubCurrentStateOptions) => {
  const {owner, repo, path} = options;

  const current = await octokit.request(`GET /repos/${owner}/${repo}/contents/${path}`, {
    owner,
    repo,
    path,
  }).catch((err) => {
    return {
      error: err,
    };
  });
  return current;
};

export const getFeaturedRepos = async () => {
  await octokit.rest.users.getAuthenticated();
  const repos = await octokit.rest.repos.listForAuthenticatedUser();
  const featured: RepoObject[] = [];
  if (!repos) {
    return {
      error: "Could not fetch repos",
    };
  }
  for (let i = 0; i < repos.data.length; i++) {
    if ((repos.data[i].topics as string[]).includes("featured")) {
      featured.push({
        name: repos.data[i].name,
        description: repos.data[i].description,
        language: repos.data[i].language,
        url: repos.data[i].html_url,
      });
    }
  }
  return {
    data: featured,
  };
};
