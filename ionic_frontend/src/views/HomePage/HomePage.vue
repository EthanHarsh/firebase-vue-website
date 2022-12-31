<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid class="ion-margin-top">
        <ion-row class="ion-justify-content-center">
          <intro-card class="animate__animated animate__fadeIn" />
          <ion-row class="ion-justify-content-center">
            <ion-col size="6" class="ion-padding">
              <ion-grid class="ion-justify-content-center">
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <ion-icon :icon="business" class="hero-icons" />
                </ion-row>
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <p>
                    I'm a full stack developer with significant start-up and
                    small business experience.
                  </p>
                </ion-row>
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <ion-icon :icon="school" class="hero-icons" />
                </ion-row>
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <p>
                    I have a bachelor's degree and a full stack coding
                    certificate from Ohio State University.
                  </p>
                </ion-row>
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <ion-icon :icon="build" class="hero-icons" />
                </ion-row>
                <ion-row
                  class="ion-justify-content-center animate__animated animate__fadeIn"
                >
                  <p>
                    My technical skills include Typescript, Python, Solidity,
                    Ethers.js, and Serverless Cloud Architectures.
                  </p>
                </ion-row>
              </ion-grid>
            </ion-col>
          </ion-row>
        </ion-row>
        <ion-row>
          <div class="ion-padding ion-margin">
            <h1>Recent Writing</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Ideas I'm thinking about</ion-card-subtitle
            >
          </div>
        </ion-row>
        <writing-cards-section :articles="articles" />
        <ion-row>
          <div class="ion-padding ion-margin animate__animated animate__fadeIn">
            <h1>Future Skills</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Subjects I'm currently studying</ion-card-subtitle
            >
          </div>
        </ion-row>
        <ion-row class="ion-padding ion-margin ion-justify-content-center">
          <div class="outer-radius no-overflow">
            <ion-accordion-group
              :multiple="true"
              :value="['first']"
              class="future-acc"
            >
              <ion-accordion value="first">
                <ion-item slot="header" color="light">
                  <ion-label>Functional Programming</ion-label>
                </ion-item>
                <div class="ion-padding content-background" slot="content">
                  {{ homeCopy.futureSkills.functionalProgramming }}
                </div>
              </ion-accordion>
              <ion-accordion value="second">
                <ion-item slot="header" color="light">
                  <ion-label>Haskell</ion-label>
                </ion-item>
                <div class="ion-padding content-background" slot="content">
                  {{ homeCopy.futureSkills.haskell }}
                </div>
              </ion-accordion>
              <ion-accordion value="third">
                <ion-item slot="header" color="light">
                  <ion-label>Clarity</ion-label>
                </ion-item>
                <div class="ion-padding content-background" slot="content">
                  {{ homeCopy.futureSkills.clarity }}
                </div>
              </ion-accordion>
              <ion-accordion value="fourth">
                <ion-item slot="header" color="light">
                  <ion-label>JsLIGO</ion-label>
                </ion-item>
                <div class="ion-padding content-background" slot="content">
                  {{ homeCopy.futureSkills.jsLigo }}
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </div>
        </ion-row>
        <ion-row>
          <div class="ion-padding ion-margin animate__animated animate__fadeIn">
            <h1>Coding Projects</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Past & Current Projects</ion-card-subtitle
            >
          </div>
        </ion-row>
        <project-card-section :projects="repos" />
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { httpsCallable, HttpsCallableResult } from "firebase/functions";
import "animate.css";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardSubtitle,
  IonIcon,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { business, school, build } from "ionicons/icons";
import { functions } from "@/constants/firebase";
import WritingCardsSection from "./sections/WritingCardSection.vue";
import ProjectCardSection from "./sections/ProjectCardSection.vue";
import IntroCard from "@/components/cards/IntroCard.vue";
import { homeCopy } from "@/constants/copy/home";
import writingJson from "@/constants/json/recentArticles.json";
import featuredRepoJson from "@/constants/json/featuredRepos.json";

const title = "Welcome 👋🏻";

export default defineComponent({
  name: "HomePage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCardSubtitle,
    IonIcon,
    WritingCardsSection,
    ProjectCardSection,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IntroCard,
  },
  data() {
    return {
      articles: writingJson.data,
      repos: featuredRepoJson.data.map((a) => {
        return {
          ...a,
          id: a.name,
        };
      }),
      title,
    };
  },
  async mounted() {
    const fetchErrorMsg = "Error fetching writing data.";

    // Get featured repos
    const checkFeaturedRepos = httpsCallable(functions, "checkFeaturedRepos");
    const repos = await checkFeaturedRepos(featuredRepoJson.hash).catch(
      (err) => {
        err && console.error(fetchErrorMsg);
      }
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    repos.update &&
      (this.repos = (repos as HttpsCallableResult<any>).data.data.reverse());

    // Get the latest articles
    const checkRssFeed = httpsCallable(functions, "checkRssFeed");
    const d = await checkRssFeed(writingJson.hash).catch((err) => {
      err && console.error(fetchErrorMsg);
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    d.update && (this.articles = (d as HttpsCallableResult<any>).data.data);
  },
  setup() {
    return {
      business,
      school,
      build,
      homeCopy,
    };
  },
});
</script>

<style scoped>
.hero-icons {
  height: 100px;
  width: 100px;
  color: var(--ion-color-primary);
  margin-top: 32px;
}

.future-acc {
  width: 66vw !important;
  border-radius: var(--outer-radius);
}

.no-overflow {
  overflow: hidden;
}

.content-background {
  background: var(--ion-color-step-200);
}
</style>
