import axios from "axios";
import {parseFeed} from "htmlparser2";

interface Options {
    recent: boolean
}

export const getRssFeed = async (options?: Options) => {
  // Error Messages
  const errorMsg = "Error fetching RSS feed.";

  // Fetch RSS Feed.
  const data = await axios.get("https://ethanharsh.medium.com/feed")
      .catch((err) => {
        console.error("Error fetching medium RSS feed.");
        console.error(err);
      });
  if (!data) {
    return {error: errorMsg};
  }

  // Parse RSS
  const feed = parseFeed(data.data);
  if (!feed) {
    return {error: errorMsg};
  }

  // Send back RSS feeds
  if ((options as Options).recent && feed) {
    feed.items = [feed.items[0], feed.items[1], feed.items[2]];
  }

  return {data: feed};
};
