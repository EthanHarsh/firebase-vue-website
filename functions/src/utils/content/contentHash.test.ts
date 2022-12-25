import contentHash from "./contentHash";
import featuredRepos from "./__test-data__/featuredRepos.json";
import recentArticles from "./__test-data__/recentArticles.json";

test("Should return matching hash from featuredRepos.json", () => {
  expect(contentHash(featuredRepos.data)).toBe(featuredRepos.hash);
});

test("Should return matching hash from recentArticles.json", () => {
  expect(contentHash(recentArticles.data)).toBe(recentArticles.hash);
});
