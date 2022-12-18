import octokit from "../config";
import {GithubCurrentStateOptions} from "../../types";

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
  const featured = [];
  if (!repos) {
    return {
      error: "Could not fetch repos",
    };
  }
  for (const repo of repos.data) {
    if ((repo.topics as string[]).includes("featured")) {
      const ro = {
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
      };
      featured.push(ro);
    }
  }
  return {
    data: featured,
  };
};
