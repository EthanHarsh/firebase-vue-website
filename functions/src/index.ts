import * as functions from "firebase-functions";
import {checkRssFeed} from "./medium";
import {getFeaturedRepos} from "./github";

exports.getFeaturedRepos = functions.https.onCall(getFeaturedRepos);
exports.checkRssFeed = functions.https.onCall(checkRssFeed);
