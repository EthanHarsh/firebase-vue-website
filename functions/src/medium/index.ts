import {checkContent} from "../utils";
import {getRssFeed, updateRssJson} from "./rss";

export * from "./rss";

export const checkRssFeed = async (hash: string) => {
  const response = await checkContent(hash, {
    contentFetch: getRssFeed,
    contentUpdate: updateRssJson,
    errorMsg: "Error checking RSS feed.",
  });

  return response;
};
