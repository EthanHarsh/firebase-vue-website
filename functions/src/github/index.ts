import {Octokit} from "octokit";
import {OctokitResponse} from "@octokit/types";
import {GITHUB_TOKEN} from "../app_config.json";
import {RssResponse, ErrorResponse, items} from "../medium";
import {contentHash} from "../utils";


interface RepoObject {
  name: string,
  description: string | null,
  language: string | null,
  url: string | null,
}

interface RepoResponse {
  data: RepoObject[]
}

interface GithubCurrentStateOptions {
  owner: string,
  repo: string,
  path: string,
}

interface UpdateGitHubOptions extends GithubCurrentStateOptions {
  message: string,
  content: {
    hash: string,
    data: items[] | RepoObject[]
  },
  current: OctokitResponse<any, number>
}

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

const getCurrentRepoState = async (options: GithubCurrentStateOptions) => {
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

const updateRepo = async (options: UpdateGitHubOptions) => {
  const {owner, repo, path, message, content, current} = options;

  const updateRes = await octokit.request(`PUT /repos/${owner}/${repo}/contents/${path}`, {
    owner,
    repo,
    path,
    message,
    committer: {
      name: "Ethan Harsh",
      email: "ethan@ethanharsh.com",
    },
    content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sha: current.data.sha,
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

export const updateRssJson = async (rssResponse: RssResponse, rssHash: string) => {
  let options: GithubCurrentStateOptions | UpdateGitHubOptions = {
    owner: "EthanHarsh",
    repo: "firebase-vue-website",
    path: "ionic_frontend/src/constants/json/recentArticles.json",
  };

  const current = await getCurrentRepoState(options);

  if ((current as ErrorResponse).error) {
    return {
      error: (current as ErrorResponse).error,
    };
  }

  options = {
    ...options,
    message: "updating article json",
    content: {
      hash: rssHash,
      data: rssResponse.data,
    },
    current: current as OctokitResponse<any, number>,
  };

  const updateRes = await updateRepo(options);

  if ((updateRes as ErrorResponse).error) {
    return {
      error: (updateRes as ErrorResponse).error,
    };
  } else {
    return true;
  }
};

export const updateFeaturedRepoJson = async (featuredRepoResponse: RepoResponse, repoHash: string) => {
  let options: GithubCurrentStateOptions | UpdateGitHubOptions = {
    owner: "EthanHarsh",
    repo: "firebase-vue-website",
    path: "ionic_frontend/src/constants/json/featuredRepos.json",
  };

  const current = await getCurrentRepoState(options);

  if ((current as ErrorResponse).error) {
    return {
      error: (current as ErrorResponse).error,
    };
  }

  options = {
    ...options,
    message: "updating featured repo json",
    content: {
      hash: repoHash,
      data: featuredRepoResponse.data,
    },
    current: current as OctokitResponse<any, number>,
  };

  const updateRes = await updateRepo(options);

  if ((updateRes as ErrorResponse).error) {
    return {
      error: (updateRes as ErrorResponse).error,
    };
  } else {
    return true;
  }
};

export const checkFeaturedRepos = async (hash: string) => {
  const errorMsg = "Error checking featured repos.";
  const featuredRepos = await getFeaturedRepos();

  if ((featuredRepos as ErrorResponse).error) {
    return {
      error: errorMsg,
    };
  }

  const featuredRepoHash = contentHash((featuredRepos as RepoResponse).data);

  if (featuredRepoHash !== hash) {
    await updateFeaturedRepoJson((featuredRepos as RepoResponse), featuredRepoHash);
    return {
      update: true,
      data: (featuredRepos as RepoResponse).data,
    };
  } else {
    return {
      update: false,
    };
  }
};
