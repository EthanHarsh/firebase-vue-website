/* eslint-disable @typescript-eslint/ban-ts-comment */
import checkContent from "./checkContent";
import featuredRepos from "./__test-data__/featuredRepos.json";
import recentArticles from "./__test-data__/recentArticles.json";

const mockContentFetch = () => {
  return {data: featuredRepos.data};
};

const mockContentUpdate = () => {
  return true;
};

const options = {
  errorMsg: "Error Message",
  contentFetch: mockContentFetch,
  contentUpdate: mockContentUpdate,
};

test("Should not update featured repo data", async () => {
// @ts-ignore
  const check = await checkContent(featuredRepos.hash, options);
  expect(JSON.stringify(check)).toBe(JSON.stringify({
    update: false,
  }));
});

test("Should update featured repo data.", async () => {
  // @ts-ignore
  const check = await checkContent(recentArticles.hash, options);
  expect(JSON.stringify(check)).toBe(JSON.stringify({
    update: true,
    data: featuredRepos.data,
  }));
});
