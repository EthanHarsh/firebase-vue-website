import {OctokitResponse} from "@octokit/types";
import octokit from "../config";
import {getCurrentRepoState} from "./get";
import {RssResponse, ErrorResponse, RepoResponse, GithubCurrentStateOptions, UpdateGitHubOptions} from "../../types";

export const updateRepo = async (options: UpdateGitHubOptions) => {
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

export const updateJson = async (response: RssResponse | RepoResponse, hash: string, path: string, message: string) => {
  const options: GithubCurrentStateOptions = {
    owner: "EthanHarsh",
    repo: "firebase-vue-website",
    path,
  };

  const current = await getCurrentRepoState(options);

  if ((current as ErrorResponse).error) {
    return {
      error: (current as ErrorResponse).error,
    };
  }

  const updateRes = await updateRepo({
    ...options,
    message,
    content: {
      hash: hash,
      data: response.data,
    },
    current: current as OctokitResponse<any, number>,
  });

  if ((updateRes as ErrorResponse).error) {
    return {
      error: (updateRes as ErrorResponse).error,
    };
  } else {
    return true;
  }
};
