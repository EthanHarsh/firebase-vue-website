/* eslint-disable camelcase */
import * as functions from "firebase-functions";
import {checkRssFeed} from "./medium";
import {checkFeaturedRepos} from "./github";
import {watchGmailMessages} from "./pubsub";
// import {auth_init, auth_callback} from "./auth";

exports.checkRssFeed = functions.https.onCall(checkRssFeed);
exports.checkFeaturedRepos = functions.https.onCall(checkFeaturedRepos);
exports.watchGmailMessages = functions.pubsub.topic("gmail-watch").onPublish(watchGmailMessages);
// exports.auth_init = functions.https.onRequest(auth_init);
// exports.auth_callback = functions.https.onRequest(auth_callback);
