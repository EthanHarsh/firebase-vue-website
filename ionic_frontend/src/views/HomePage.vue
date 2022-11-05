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
      <ion-grid class="ion-margin-top">
        <ion-row class="ion-justify-content-center">
            <ion-card>
              <ion-card-content class="ion-margin-top">
                <figure class="heroimg">
                  <ion-row class="ion-justify-content-center ion-align-items-start">
                    <ion-img v-bind="heroAttr" />
                  </ion-row>
                  <figcaption class="caption ion-padding">{{heroCaption}}</figcaption>        
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
                        <ion-text><Span class="intro-card-content-title">Name:</Span> <span class="intro-card-content">Ethan Harsh</span></ion-text>                   
                      </div>
                      <div>
                        <ion-text><Span class="intro-card-content-title">Interests:</Span> 
                          <ul class="interests">
                            <li>Mac & Cheese</li>
                            <li>Techno</li>
                            <li>Coding</li>
                          </ul>
                        </ion-text>                   
                      </div>
                      <div>
                        <ion-text><Span class="intro-card-content-title">Tech Stack:</Span> 
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
              <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-icon :icon="business" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-text class="ion-margin ion-padding hero-description">I'm a web3 focused developer with significant start-up and small business experience.</ion-text>
                </ion-row>
                <ion-row class="ion-justify-content-center">    
                    <ion-icon :icon="school" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-text class="ion-margin ion-padding hero-description">I have a bachelor's degree and a full stack coding certificate from Ohio State University.</ion-text>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-icon :icon="build" class="hero-icons" />
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-text class="ion-margin ion-padding hero-description">My technical skills include Solidity, Ethers.js, Typescript, Python and Serverless Cloud Architectures.</ion-text>
                </ion-row>
              </ion-grid> 
            </ion-col>
          </ion-row>
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

  .intro-card {
    color: var(--ion-color-medium);
  }

  .intro-card-content-title {
    color: var(--ion-color-primary-contrast);
    font-size: 1.25rem;
  }

  .intro-card-content {
    margin-left: 3.6rem;
  }
  .interests{
    list-style-type: none;
    margin-left: 5rem;
    margin-top: -1.5rem;
  }
</style>