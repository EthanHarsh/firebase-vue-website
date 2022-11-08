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
          <intro-card />
          <ion-row class="ion-justify-content-center">
            <ion-col size="6" class="ion-padding">
              <ion-grid class="ion-justify-content-center">
                <ion-row class="ion-justify-content-center">
                  <ion-icon :icon="business" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <p>
                    I'm a web3 focused developer with significant start-up and
                    small business experience.
                  </p>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <ion-icon :icon="school" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <p>
                    I have a bachelor's degree and a full stack coding
                    certificate from Ohio State University.
                  </p>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <ion-icon :icon="build" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                  <p>
                    My technical skills include Solidity, Ethers.js, Typescript,
                    Python and Serverless Cloud Architectures.
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
        <writing-cards :articles="articles" :loading="writingLoading" />
        <ion-row>
          <div class="ion-padding ion-margin">
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
          <div class="ion-padding ion-margin">
            <h1>Coding Projects</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Past & Current Projects</ion-card-subtitle
            >
          </div>
        </ion-row>
        <project-cards :loading="projectLoading" :projects="repos" />
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { httpsCallable, HttpsCallableResult } from "firebase/functions";
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
import { functions } from "../constants/firebase";
import WritingCards from "@/components/cards/WritingCards.vue";
import ProjectCards from "@/components/cards/ProjectCards.vue";
import IntroCard from "@/components/cards/IntroCard.vue";
import { homeCopy } from "../constants/copy/home";

const title = "Welcome";

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
    WritingCards,
    ProjectCards,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IntroCard,
  },
  data() {
    return {
      articles: [],
      repos: [],
      title,
    };
  },
  async mounted() {
    const fetchErrorMsg = "Error fetching writing data.";

    // Get the latest articles
    const getRssFeed = httpsCallable(functions, "getRssFeed");
    const d = await getRssFeed({ recent: true }).catch((err) => {
      err && console.error(fetchErrorMsg);
    });
    d && (this.articles = (d as HttpsCallableResult<any>).data.data);
    this.writingLoading = false;

    // Get featured repos
    const getFeaturedRepos = httpsCallable(functions, "getFeaturedRepos");
    const repos = await getFeaturedRepos().catch((err) => {
      err && console.error(fetchErrorMsg);
    });
    repos &&
      (this.repos = (repos as HttpsCallableResult<any>).data.data.reverse());
    this.projectLoading = false;
  },
  setup() {
    return {
      business,
      school,
      build,
      writingLoading: true,
      projectLoading: true,
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
}

.no-overflow {
  overflow: hidden;
}

.content-background {
  background: var(--ion-color-step-200);
}
</style>
