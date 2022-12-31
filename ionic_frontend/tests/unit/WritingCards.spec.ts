import { shallowMount } from "@vue/test-utils";
import WritingCards from "@/components/cards/WritingCards/WritingCard-MobileChange.vue";
import testData from "../__test-data__/recentArticles.json";

describe("WritingCard.vue", () => {
  it("Renders writing information based off prop object.", () => {
    console.log(testData.data);
  });
});
