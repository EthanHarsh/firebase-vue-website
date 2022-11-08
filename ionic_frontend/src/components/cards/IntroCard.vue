<template>
  <ion-card class="outer-radius">
    <ion-card-content class="ion-margin-top">
      <figure class="heroimg">
        <ion-row class="ion-justify-content-center ion-align-items-start">
          <img v-bind="heroAttr" class="inner-radius" />
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
                <span class="intro-card-content">Ethan Harsh</span></ion-text
              >
            </div>
            <div>
              <ion-text
                ><span class="intro-card-content-title">Interests:</span>
                <ul class="interests">
                  <li>Mac & Cheese</li>
                  <li>Techno</li>
                  <li>Coding</li>
                </ul>
              </ion-text>
            </div>
            <div>
              <ion-text
                ><span class="intro-card-content-title">Tech Stack:</span>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
} from "@ionic/vue";
import { heroImages } from "../../constants/images";

const heroImg = () => {
  const index: number = Math.round(Math.random() * 2);
  return heroImages[index];
};

const heroAttr = {
  ...heroImg(),
  class: "heroImg",
};

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
  },
  data() {
    return {
      heroAttr,
      heroCaption: heroAttr.alt,
    };
  },
});
</script>

<style scoped>
.heroImg {
  height: 300px;
  width: 300px;
}
.caption {
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
</style>
