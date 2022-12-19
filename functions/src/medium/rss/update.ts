import {updateJson} from "../../github";
import {RssResponse} from "../../types";

export const updateRssJson = async (rssResponse: RssResponse, rssHash: string) => {
  const response = await updateJson(rssResponse, rssHash, "ionic_frontend/src/constants/json/recentArticles.json", "updating article json");
  return response;
};
export type UpdateRssJson = typeof updateRssJson;
