<template>
  <div v-if="loading">
    <ion-row class="ion-padding ion-margin ion-justify-content-center">
      <ion-col>
        <loading-animation />
      </ion-col>
    </ion-row>
  </div>
  <div v-else-if="mobileChange">
    <div v-for="repo of projects" :key="repo.language">
      <ion-row class="ion-padding ion-margin">
        <ion-col>
          <ion-card
            class="ion-padding ion-margin outer-radius no-shadow light-border"
          >
            <ion-card-header
              color="tertiary"
              class="ion-margin ion-padding inner-radius"
            >
              <ion-card-subtitle>
                {{ repo.language }}
              </ion-card-subtitle>
              <ion-card-title>
                {{ repo.name }}
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="ion-margin-top">
              <ion-text>
                {{ repo.description }}
              </ion-text>
            </ion-card-content>
            <ion-card-content>
              <ion-button fill="outline" color="tertiary" :href="repo.url"
                >View on Github</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </div>
  </div>
  <div v-else>
    <ion-row>
      <ion-col size="4" v-for="repo of projects" :key="repo.language">
        <ion-card
          class="ion-padding ion-margin outer-radius no-shadow light-border"
        >
          <ion-card-header
            color="tertiary"
            class="ion-margin ion-padding inner-radius"
          >
            <ion-card-subtitle>
              {{ repo.language }}
            </ion-card-subtitle>
            <ion-card-title>
              {{ repo.name }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-margin-top">
            <ion-text>
              {{ repo.description }}
            </ion-text>
          </ion-card-content>
          <ion-card-content>
            <ion-button fill="outline" color="tertiary" :href="repo.url"
              >View on Github</ion-button
            >
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRow,
  IonButton,
  IonCol,
  IonCardHeader,
  IonText,
} from "@ionic/vue";
import { store } from "../../store";
import LoadingAnimation from "@/components/loading/LoadingAnimation.vue";

export default defineComponent({
  name: "ProjectCards",
  components: {
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRow,
    IonButton,
    IonCol,
    IonCardHeader,
    IonText,
    LoadingAnimation,
  },
  props: {
    projects: { type: Array, required: true },
    loading: Boolean,
  },
  computed: {
    mobileChange: () => {
      return store.mobileSize;
    },
  },
});
</script>

<style scoped></style>
