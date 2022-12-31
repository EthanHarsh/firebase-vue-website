import { mount } from "@vue/test-utils";
import ProjectCardMobileChange from "@/components/cards/ProjectCards/ProjectCard-MobileChange.vue";
import ProjectCard from "@/components/cards/ProjectCards/ProjectCard.vue";
import testData from "../__test-data__/featuredRepos.json";

const propData = testData.data[0];
const id = propData.name;
describe("ProjectCardMobileChange.vue", () => {
  it("Props are properly passed", () => {
    const wrapper = mount(ProjectCardMobileChange, {
      props: {
        name: propData.name,
        url: propData.url,
        language: propData.language,
        description: propData.description,
        id,
      },
    });
    expect(wrapper.props().name).toBe(propData.name);
    expect(wrapper.props().url).toBe(propData.url);
    expect(wrapper.props().language).toBe(propData.language);
    expect(wrapper.props().description).toBe(propData.description);
    expect(wrapper.props().id).toBe(id);
  });

  it("Props are rendered in correct place", () => {
    const wrapper = mount(ProjectCardMobileChange, {
      props: {
        name: propData.name,
        url: propData.url,
        language: propData.language,
        description: propData.description,
        id,
      },
    });
    expect(wrapper.getComponent(`#${id}-name`).text()).toBe(propData.name);
    expect(wrapper.getComponent(`#${id}-description`).text()).toBe(
      propData.description
    );
    expect(wrapper.getComponent(`#${id}-language`).text()).toBe(
      propData.language
    );
    expect(wrapper.findAll(`#${id}-url`)[0].text()).toContain("View on Github");
  });
});
describe("ProjectCard.vue", () => {
  it("Props are properly passed", () => {
    const wrapper = mount(ProjectCard, {
      props: {
        name: propData.name,
        url: propData.url,
        language: propData.language,
        description: propData.description,
        id,
      },
    });
    expect(wrapper.props().name).toBe(propData.name);
    expect(wrapper.props().url).toBe(propData.url);
    expect(wrapper.props().language).toBe(propData.language);
    expect(wrapper.props().description).toBe(propData.description);
    expect(wrapper.props().id).toBe(id);
  });

  it("Props are rendered in correct place", () => {
    const wrapper = mount(ProjectCard, {
      props: {
        name: propData.name,
        url: propData.url,
        language: propData.language,
        description: propData.description,
        id,
      },
    });
    expect(wrapper.getComponent(`#${id}-name`).text()).toBe(propData.name);
    expect(wrapper.getComponent(`#${id}-description`).text()).toBe(
      propData.description
    );
    expect(wrapper.getComponent(`#${id}-language`).text()).toBe(
      propData.language
    );
    expect(wrapper.findAll(`#${id}-url`)[0].text()).toContain("View on Github");
  });
});
