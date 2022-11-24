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
          <ion-title size="large">{{ title }}</ion-title
          >"
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col
            size="12"
            class="header-img"
            style="
               {
                background-image: headerAttr.src;
              }
            "
          >
            <h1 class="header-title">What's next?</h1>
            <img v-bind="headerAttr" />
          </ion-col>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Loading Bar Updates</h1>
            <p>
              Change loading bar to only display on the objects being updated.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>CI/CD Pipeline</h1>
            <p>
              Build a CI/CD pipeline. The pipeline needs to automatically test
              and deploy new cloud functions as well as test, build and deploy
              changes to the Vue application.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Build Unit Tests for Cloud Functions</h1>
            <p>
              Build a CI/CD pipeline. The pipeline needs to automatically deploy
              new cloud functions as well as build and deploy changes to the Vue
              application.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Optimize data delivery from Cloud Functions</h1>
            <p>
              Implement GZIP compression and other techniques to optimize data
              delivery from cloud functions.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Featured Projects/Recent Writing Optimization</h1>
            <p>
              Data fetching associated with getting Featured Github Projects and
              recently Written Medium articles is the main cause of loading
              delays. To combat this issue cloud functions to monitor Medium
              articles and changes to the featured projects on my Github profile
              will be implemented to hardcore the data into JSON files included
              within the Vue application.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Add Ski Game</h1>
            <p>
              I have built a ski game that works well within a Desktop or Laptop
              browser environment. New features to allow touchscreen play are
              needed to deploy to my portfolio.
            </p>
          </div>
        </ion-row>
        <ion-row class="ion-padding item">
          <div>
            <h1>Roadmap Automation</h1>
            <p>
              My roadmap is currently contained within a Google Sheet. I would
              like to integrate the sheet to automatically update the roadmap
              section of my portfolio page when the spreadsheet is updated.
            </p>
          </div>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { roadmapImages } from "../constants/images";

const title = "Roadmap 🗺️";

const headerImg = () => {
  const index: number = Math.round(Math.random() * 1);
  return roadmapImages[index];
};

const headerAttr = headerImg();

export default defineComponent({
  name: "RoadmapPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  data() {
    return {
      title,
      headerAttr,
    };
  },
});
</script>

<style scoped>
img {
  width: 100%;
  position: absolute;
  top: -33vh;
  left: 0px;
  z-index: -1;
  filter: blur(5px);
}

.header-img {
  height: 33vh;
  overflow: hidden;
}

.header-title {
  text-align: center;
  z-index: 2;
  font-size: 10vw;
}

.item:nth-of-type(odd) {
  background-color: var(--ion-color-light);
  color: var(--ion-color-light-contrast-rgb);
}

@media screen and (max-width: 992px) {
  .header-img {
    height: 20vh;
    overflow: hidden;
  }
}

@media screen and (max-width: 768px) {
  .header-img {
    height: 15vh;
    overflow: hidden;
  }
}
</style>
