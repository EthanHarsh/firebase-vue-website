import {Octokit} from "octokit";
import {GITHUB_TOKEN} from "../../app_config.json";

export default new Octokit({auth: GITHUB_TOKEN});
