/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
// express-oauth is a Google-provided, open-source package that helps automate
// the authorization process.
import Auth from "@google-cloud/express-oauth2-handlers";
import {Request, Response} from "express";
// googleapis is the official Google Node.js client library for a number of
// Google APIs, including Gmail.
import {google} from "googleapis";
const gmail = google.gmail("v1");

import {GCP_PROJECT, PUBSUB_TOPIC} from "../../app_config.json";

// Specify the access scopes required. If authorized, Google will grant your
// registered OAuth client access to your profile, email address, and data in
// your Gmail and Google Sheets.
const requiredScopes = [
  "profile",
  "email",
  "https://www.googleapis.com/auth/gmail.modify",
  "https://www.googleapis.com/auth/spreadsheets",
];

// eslint-disable-next-line new-cap
const auth = Auth("datastore", requiredScopes, "email", true);

// Call the Gmail API (Users.watch) to set up Gmail push notifications.
// Gmail will send a notification to the specified Cloud Pub/Sun topic
// every time a new mail arrives in inbox.
const setUpGmailPushNotifications = (email: string, pubsubTopic: string) => {
  return gmail.users.watch({
    userId: email,
    requestBody: {
      labelIds: ["INBOX"],
      topicName: `projects/${GCP_PROJECT}/topics/${pubsubTopic}`,
    },
  });
};

// If the authorization process completes successfully, set up Gmail push
// notification using the tokens returned
const onSuccess = async (req: Request, res: Response) => {
  let email;

  try {
    // Set up the googleapis library to use the returned tokens.
    email = await auth.auth.authedUser.getUserId(req, res);
    const OAuth2Client = await auth.auth.authedUser.getClient(req, res, email);
    google.options({auth: OAuth2Client});
  } catch (err) {
    console.log(err);
    throw err;
  }

  try {
    await setUpGmailPushNotifications(email, PUBSUB_TOPIC as string);
  } catch (err: any) {
    console.log(err);
    if (!err.toString().includes("one user push notification client allowed per developer")) {
      throw err;
    }
  }

  res.send("Successfully set up Gmail push notifications.");
};

// If the authorization process fails, return an error message.
const onFailure = (err: any, req: Request, res: Response) => {
  console.log(err);
  res.send("An error has occurred in the authorization process.");
};

// Export the Cloud Functions for authorization.
export const auth_init = auth.routes.init;
export const auth_callback = auth.routes.cb(onSuccess, onFailure);
