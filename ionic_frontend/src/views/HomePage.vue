<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{title}}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid class="ion-margin-top flex">
        <ion-row class="ion-justify-content-center ion-align-self-center">
          <ion-col size="8">
            <figure class="heroimg ion-align-self-center ion-justify-content-center">
              <ion-img v-bind="heroAttr" />
              <figcaption class="caption ion-padding">{{heroCaption}}</figcaption>        
            </figure>
          </ion-col>
          <ion-col size="8">
          <ion-card>
            <ion-card-header color="primary">
              <ion-card-subtitle>Hello.</ion-card-subtitle>
              <ion-card-title>My name is Ethan.</ion-card-title>
            </ion-card-header>
            <ion-card-content class="ion-margin-top">
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <h1 class="tagline ion-margin ion-padding">I like Mac & Cheese, Techno, and Coding.</h1>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                  <ion-icon :icon="business" class="hero-icons" />
              </ion-row>
              <ion-row class="ion-justify-content-center">
                  <h2 class="ion-margin ion-padding hero-description">I'm a web3 focused developer with significant start-up and small business experience.</h2>
              </ion-row>
              <ion-row class="ion-justify-content-center">    
                  <ion-icon :icon="school" class="hero-icons" />
              </ion-row>
              <ion-row class="ion-justify-content-center">
                  <h2 class="ion-margin ion-padding hero-description">I have a bachelor's degree and a full stack coding certificate from Ohio State University.</h2>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                  <ion-icon :icon="build" class="hero-icons" />
              </ion-row>
              <ion-row class="ion-justify-content-center">
                  <h2 class="ion-margin ion-padding hero-description">My technical skills include Solidity, Ethers.js, Typescript, Python and Serverless Cloud Architectures.</h2>
              </ion-row>
            </ion-grid>

            </ion-card-content>
          </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonIcon } from '@ionic/vue';
import { business, school, build } from 'ionicons/icons';
import { heroImages} from '../constants/images';

const title = 'Welcome';
const heroImg = () => {
  const index: number = Math.round(Math.random() * 2);
  return heroImages[index];
}

const heroAttr = {
  ...heroImg(),
  class: 'heroImg'
}

export default  defineComponent({
  name: 'HomePage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonIcon },
  data() {
    return {
      title,
      heroAttr,
      heroCaption: heroAttr.alt
    }
  },
  setup() {
    return {
      business,
      school,
      build
    }
  }
});
</script>

<style scoped>
  .heroImg {
    height: 300px;
    width: 300px;
    border-radius: 100%;
    overflow: hidden;
  }

  .hero-description {
    color: var(--ion-color-primary-contrast);
    text-align: center;
  }

  .hero-icons {
    height: 100px;
    width: 100px;
    color: var(--ion-color-secondary);
  }

  .tagline {
    color: var(--ion-color-primary-contrast);
    text-align: center;
  }

  .caption {
    opacity: 60%;
    margin-top: 8px;
    text-align: center;
  }
</style>