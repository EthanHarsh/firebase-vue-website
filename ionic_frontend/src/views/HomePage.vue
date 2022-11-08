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
          <ion-card>
            <ion-card-content class="ion-margin-top">
              <figure class="heroimg">
                <ion-row
                  class="ion-justify-content-center ion-align-items-start"
                >
                  <ion-img v-bind="heroAttr" />
                </ion-row>
                <figcaption class="caption ion-padding">
                  {{ heroCaption }}
                </figcaption>
              </figure>
            </ion-card-content>
            <ion-card-header color="primary">
              <ion-card-subtitle>Hello,</ion-card-subtitle>
              <ion-card-title>My name is Ethan.</ion-card-title>
            </ion-card-header>
            <ion-card-content class="ion-margin-top">
              <ion-grid class="ion-margin">
                <ion-row class="ion-padding">
                  <div class="intro-card">
                    <div>
                      <ion-text
                        ><span class="intro-card-content-title">Name:</span>
                        <span class="intro-card-content"
                          >Ethan Harsh</span
                        ></ion-text
                      >
                    </div>
                    <div>
                      <ion-text
                        ><span class="intro-card-content-title"
                          >Interests:</span
                        >
                        <ul class="interests">
                          <li>Mac & Cheese</li>
                          <li>Techno</li>
                          <li>Coding</li>
                        </ul>
                      </ion-text>
                    </div>
                    <div>
                      <ion-text
                        ><span class="intro-card-content-title"
                          >Tech Stack:</span
                        >
                        <ul class="interests">
                          <li>Typescript</li>
                          <li>Solidity</li>
                          <li>Vue.js</li>
                          <li>Python</li>
                          <li>GCP & AWS</li>
                          <li>Docker</li>
                          <li>Serverless</li>
                        </ul>
                      </ion-text>
                    </div>
                  </div>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

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
        <WritingPreviewCard :articles="articles" />
        <ion-row>
          <div class="ion-padding ion-margin">
            <h1>Future Skills</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Subjects I'm currently studying</ion-card-subtitle
            >
          </div>
        </ion-row>
        <ion-row class="ion-padding ion-margin ion-justify-content-center">
          <ion-accordion-group
            :multiple="true"
            :value="['first']"
            class="future-acc"
          >
            <ion-accordion value="first">
              <ion-item slot="header" color="light">
                <ion-label>Functional Programming</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Functional programming is a programming paradigm that focuses on
                the behavior of functions rather than the state of data. Its
                simpler syntax, code as expressions, and emphasis on
                immutability have made functional programming more popular in
                recent years. It is employed in almost every scenario, ranging
                from front-end development to server-side scripting to back-end
                services. Functional programming used in conjunction with new
                serverless cloud tools can be used to quickly build robust,
                decoupled, and easily scalable applications.
              </div>
            </ion-accordion>
            <ion-accordion value="second">
              <ion-item slot="header" color="light">
                <ion-label>Haskell</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Haskell is one of the oldest and most popular functional
                languages. It was the original pathfinder for many advanced
                programming language features, including features found in
                extremely popular languages such as Java. Haskell is a strictly
                functional, statistical, general-purpose language that provides
                type inference and lazy evaluation. It is utilized in academic,
                research, and industrial settings. Haskell is reliable and
                scalable because its is strictly functional and has no side
                effects.
              </div>
            </ion-accordion>
            <ion-accordion value="third">
              <ion-item slot="header" color="light">
                <ion-label>Clarity</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Bitcoin now supports smart contracts with Clarity. The language
                is decidable, making it simple to determine what your code will
                do. Clarity is interpreted instead of compiled with smart
                contract source code published directly on chain. Clarity
                provides developers with a secure way to create sophisticated
                smart contracts for the world's most secure blockchain.
              </div>
            </ion-accordion>
            <ion-accordion value="fourth">
              <ion-item slot="header" color="light">
                <ion-label>JsLIGO</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Tezos smart contracts can be written in LIGO, a functional
                language designed to include the features you need while
                avoiding patterns that make formal verification difficult. A
                large portion of the most efficient smart contracts can be
                described in less than 1,000 lines of code, making them a good
                target for formal verification methods (a major feature of
                Tezos). A simple, strongly typed language with a low footprint
                is the end goal of LIGO. JsLIGO is a TypeScript/JavaScript
                inspired syntax that aims to be familiar to those coming from
                TypeScript and Javascript.
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </ion-row>
        <ion-row>
          <div class="ion-padding ion-margin">
            <h1>Coding Projects</h1>
            <ion-card-subtitle class="ion-padding-left"
              >Past & Current Projects</ion-card-subtitle
            >
          </div>
        </ion-row>
        <ProjectCards :projects="repos" />
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
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonIcon,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { business, school, build } from "ionicons/icons";
import { heroImages } from "../constants/images";
import { functions } from "../constants/firebase";
import WritingPreviewCard from "../components/WritingPreviewCard.vue";
import ProjectCards from "../components/ProjectCards.vue";

const title = "Welcome";
const heroImg = () => {
  const index: number = Math.round(Math.random() * 2);
  return heroImages[index];
};

const heroAttr = {
  ...heroImg(),
  class: "heroImg",
};

export default defineComponent({
  name: "HomePage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonIcon,
    WritingPreviewCard,
    ProjectCards,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
  },
  data() {
    return {
      articles: [],
      repos: [],
      title,
      heroAttr,
      heroCaption: heroAttr.alt,
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

    // Get featured repos
    const getFeaturedRepos = httpsCallable(functions, "getFeaturedRepos");
    const repos = await getFeaturedRepos().catch((err) => {
      err && console.error(fetchErrorMsg);
    });
    repos &&
      (this.repos = (repos as HttpsCallableResult<any>).data.data.reverse());
  },
  setup() {
    return {
      business,
      school,
      build,
    };
  },
});
</script>

<style scoped>
.heroImg {
  height: 300px;
  width: 300px;
  border-radius: 2.5px;
}

.hero-icons {
  height: 100px;
  width: 100px;
  color: var(--ion-color-primary);
  margin-top: 32px;
}

.tagline {
  color: var(--ion-color-primary-contrast);
  text-align: center;
}

.caption {
  color: var(--ion-color-medium);
  margin-top: 8px;
  text-align: center;
}

.intro-card-content-title {
  font-size: 1.25rem;
}

.intro-card-content {
  margin-left: 3.6rem;
}
.interests {
  list-style-type: none;
  margin-left: 5rem;
  margin-top: -1.5rem;
}

.future-acc {
  width: 66vw !important;
}
</style>
