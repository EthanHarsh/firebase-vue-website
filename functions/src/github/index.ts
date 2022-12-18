import {Octokit} from "octokit";
import {OctokitResponse} from "@octokit/types";
import {GITHUB_TOKEN} from "../app_config.json";
import {RssResponse, ErrorResponse} from "../medium";

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
  const owner = "EthanHarsh";
  const repo = "firebase-vue-website";
  const path = "ionic_frontend/src/constants/json/recentArticles.json";

  const current = await octokit.request(`GET /repos/${owner}/${repo}/contents/${path}`, {
    owner,
    repo,
    path,
  }).catch((err) => {
    return {
      error: err,
    };
  });

  if ((current as ErrorResponse).error) {
    return {
      error: (current as ErrorResponse).error,
    };
  }

  const updateRes = await octokit.request(`PUT /repos/${owner}/${repo}/contents/${path}`, {
    owner,
    repo,
    path,
    message: "updating article json",
    committer: {
      name: "Ethan Harsh",
      email: "ethan@ethanharsh.com",
    },
    content: Buffer.from(JSON.stringify({
      hash: rssHash,
      data: rssResponse.data,
    }, null, 2)).toString("base64"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sha: (current as OctokitResponse<any, number>).data.sha,
  }).catch((err) => {
    return {
      error: err,
    };
  });

  if ((updateRes as ErrorResponse).error) {
    return {
      error: (updateRes as ErrorResponse).error,
    };
  } else {
    return true;
  }
};
