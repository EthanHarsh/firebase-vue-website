import { mount } from "@vue/test-utils";
import WritingCardMobileChange from "@/components/cards/WritingCards/WritingCard-MobileChange.vue";
import WritingCard from "@/components/cards/WritingCards/WritingCard.vue";
import testData from "../__test-data__/recentArticles.json";

const propData = testData.data[0];

describe("WritingCardMobileChange.vue", () => {
  it("Props are properly passed", () => {
    const wrapper = mount(WritingCardMobileChange, {
      props: {
        title: propData.title,
        link: propData.link,
        image: propData.image,
        pubDate: propData.pubDate,
      },
    });
    expect(wrapper.props().title).toBe(propData.title);
    expect(wrapper.props().link).toBe(propData.link);
    expect(wrapper.props().image).toBe(propData.image);
    expect(wrapper.props().pubDate).toBe(propData.pubDate);
  });

  it("Props are rendered in correct place", () => {
    const id = propData.id.split("/p/")[1];
    const wrapper = mount(WritingCardMobileChange, {
      props: {
        title: propData.title,
        link: propData.link,
        image: propData.image,
        pubDate: propData.pubDate,
        id,
      },
    });
    expect(wrapper.getComponent(`#${id}-title`).text()).toBe(propData.title);
    expect(wrapper.getComponent(`#${id}-pubDate`).text()).toBe(
      propData.pubDate
    );
    const imageAttr = wrapper.findAll(`#${id}-image`)[0].attributes();
    expect(imageAttr.src).toBe(propData.image);
    expect(imageAttr.alt).toBe(propData.title);
    expect(wrapper.findAll(`#${id}-link`)[0].text()).toContain("Read Article");
  });
});
describe("WritingCard.vue", () => {
  it("Props are properly passed", () => {
    const wrapper = mount(WritingCard, {
      props: {
        title: propData.title,
        link: propData.link,
        image: propData.image,
        pubDate: propData.pubDate,
      },
    });
    expect(wrapper.props().title).toBe(propData.title);
    expect(wrapper.props().link).toBe(propData.link);
    expect(wrapper.props().image).toBe(propData.image);
    expect(wrapper.props().pubDate).toBe(propData.pubDate);
  });

  it("Props are rendered in correct place", () => {
    const id = propData.id.split("/p/")[1];
    const wrapper = mount(WritingCard, {
      props: {
        title: propData.title,
        link: propData.link,
        image: propData.image,
        pubDate: propData.pubDate,
        id,
      },
    });
    expect(wrapper.getComponent(`#${id}-title`).text()).toBe(propData.title);
    expect(wrapper.getComponent(`#${id}-pubDate`).text()).toBe(
      propData.pubDate
    );
    const imageAttr = wrapper.findAll(`#${id}-image`)[0].attributes();
    expect(imageAttr.src).toBe(propData.image);
    expect(imageAttr.alt).toBe(propData.title);
    expect(wrapper.findAll(`#${id}-link`)[0].text()).toContain("Read Article");
  });
});
