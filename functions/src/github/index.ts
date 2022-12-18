import {Octokit} from "octokit";
import {GITHUB_TOKEN} from "../app_config.json";
import {RssResponse} from "../medium";

const octokit = new Octokit({auth: GITHUB_TOKEN});

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

export const updateRssJson = async (rssResponse: RssResponse, rssHash: string) => {
  console.log(JSON.stringify({
    hash: rssHash,
    data: rssResponse.data,
  }));
};
