/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import Auth from "@google-cloud/express-oauth2-handlers";
import {Datastore} from "@google-cloud/datastore";
import {google, gmail_v1} from "googleapis";
const gmail = google.gmail("v1");
const googleSheets = google.sheets("v4");
import vision from "@google-cloud/vision";
import {google as Google} from "@google-cloud/vision/build/protos/protos";
import {GOOGLE_SHEET_ID} from "../../app_config.json";


const datastoreClient = new Datastore();
const visionClient = new vision.ImageAnnotatorClient();

const SHEET = GOOGLE_SHEET_ID;
const SHEET_RANGE = "Sheet1!A1:F1";

const requiredScopes = [
  "profile",
  "email",
  "https://www.googleapis.com/auth/gmail.modify",
  "https://www.googleapis.com/auth/spreadsheets",
];

const auth = Auth("datastore", requiredScopes, "email", true);

const checkForDuplicateNotifications = async (messageId: string): Promise<string | undefined> => {
  const transaction = datastoreClient.transaction();
  await transaction.run();
  const messageKey = datastoreClient.key(["emailNotifications", messageId]);
  const [message] = await transaction.get(messageKey);
  if (!message) {
    await transaction.save({
      key: messageKey,
      data: {},
    });
  }
  await transaction.commit();
  if (!message) {
    return messageId;
  }
  return undefined;
};

const getMostRecentMessageWithTag = async (email: string): Promise<unknown | undefined> => {
  // Look up the most recent message.
  const listMessagesRes = await gmail.users.messages.list({
    userId: email,
    maxResults: 1,
  });
  const messageId = await checkForDuplicateNotifications((listMessagesRes.data.messages as gmail_v1.Schema$Message[])[0].id as string);

  // Get the message using the message ID.
  if (messageId) {
    const message = await gmail.users.messages.get({
      userId: email,
      id: messageId,
    });

    return message;
  }
  return undefined;
};

// Extract message ID, sender, attachment filename and attachment ID
// from the message.
const extractInfoFromMessage = (message: any) => {
  const messageId = message.data.id;
  let from;
  let filename;
  let attachmentId;

  const headers = message.data.payload.headers;
  for (const i in headers) {
    if (headers[i].name === "From") {
      from = headers[i].value;
    }
  }

  const payloadParts = message.data.payload.parts;
  for (const j in payloadParts) {
    if (payloadParts[j].body.attachmentId) {
      filename = payloadParts[j].filename;
      attachmentId = payloadParts[j].body.attachmentId;
    }
  }

  return {
    messageId: messageId,
    from: from,
    attachmentFilename: filename,
    attachmentId: attachmentId,
  };
};

// Get attachment of a message.
const extractAttachmentFromMessage = async (email: string, messageId: string, attachmentId: string) => {
  return gmail.users.messages.attachments.get({
    id: attachmentId,
    messageId: messageId,
    userId: email,
  });
};

// Tag the attachment using Cloud Vision API
const analyzeAttachment = async (data: any, filename: string) => {
  let topLabels: (string | null | undefined)[] = ["", "", ""];
  if (filename.endsWith(".png") || filename.endsWith(".jpg")) {
    const [analysis] = await visionClient.labelDetection({
      image: {
        content: Buffer.from(data, "base64"),
      },
    });
    const labels = analysis.labelAnnotations;
    topLabels = (labels as Google.cloud.vision.v1.IEntityAnnotation[]).map((x) => x.description).slice(0, 3);
  }

  return topLabels;
};

// Write sender, attachment filename, and download link to a Google Sheet.
const updateReferenceSheet = async (from: string, filename: string, topLabels: string[]) => {
  await googleSheets.spreadsheets.values.append({
    spreadsheetId: SHEET,
    range: SHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      range: SHEET_RANGE,
      majorDimension: "ROWS",
      values: [
        [from, filename].concat(topLabels),
      ],
    },
  });
};

// Refactor $_NO_AUTH_$
export const watchGmailMessages = async (event: any) => {
  // Decode the incoming Gmail push notification.
  const data = Buffer.from(event.data, "base64").toString();
  const newMessageNotification = JSON.parse(data);
  const email = newMessageNotification.emailAddress;

  try {
    await auth.auth.requireAuth(null, null, email);
  } catch (err) {
    console.log("An error has occurred in the auth process.");
    throw err;
  }
  const authClient = await auth.auth.authedUser.getClient();
  google.options({auth: authClient});

  // Process the incoming message.
  const message = await getMostRecentMessageWithTag(email);
  if (message) {
    const messageInfo = extractInfoFromMessage(message);
    if (messageInfo.attachmentId && messageInfo.attachmentFilename) {
      const attachment = await extractAttachmentFromMessage(email, messageInfo.messageId, messageInfo.attachmentId);
      const topLabels = await analyzeAttachment(attachment.data.data, messageInfo.attachmentFilename);
      await updateReferenceSheet(messageInfo.from, messageInfo.attachmentFilename, topLabels as string[]);
    }
  }
};
