import contentHash from "./contentHash";
import featuredRepos from "./__test-data__/featuredRepos.json";

test("Should return matching hash from featuredRepos.json", () => {
  expect(contentHash(featuredRepos.data)).toBe(featuredRepos.hash);
});
