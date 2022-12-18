import * as functions from "firebase-functions";
import {checkRssFeed} from "./medium";
import {checkFeaturedRepos} from "./github";

exports.checkRssFeed = functions.https.onCall(checkRssFeed);
exports.checkFeaturedRepos = functions.https.onCall(checkFeaturedRepos);
