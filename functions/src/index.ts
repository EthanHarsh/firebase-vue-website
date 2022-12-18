import * as functions from "firebase-functions";
import {getRssFeed, checkRssFeed} from "./medium";
import {getFeaturedRepos} from "./github";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getRssFeed = functions.https.onCall(getRssFeed);
exports.getFeaturedRepos = functions.https.onCall(getFeaturedRepos);
exports.checkRssFeed = functions.https.onCall(checkRssFeed);
