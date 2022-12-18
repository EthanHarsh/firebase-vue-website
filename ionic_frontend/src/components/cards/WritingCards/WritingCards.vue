<template>
  <div v-if="mobileChange">
    <div v-for="article of articles" :key="article.id">
      <ion-row class="ion-align-items-start ion-padding ion-margin">
        <ion-col>
          <ion-card
            class="ion-padding ion-margin writing-card outer-radius no-shadow light-border animate__animated animate__fadeIn"
          >
            <ion-card-header
              color="secondary"
              class="ion-margin ion-padding inner-radius"
            >
              <ion-card-subtitle>
                {{ article.pubDate }}
              </ion-card-subtitle>
              <ion-card-title>
                {{ article.title }}
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="ion-margin-top ion-justify-content-center">
              <img
                :src="article.image"
                :alt="article.title"
                class="inner-radius card-img"
              />
              <ion-button
                fill="outline"
                color="secondary"
                :href="article.link"
                class="ion-margin-top"
                >Read Article</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </div>
  </div>
  <div v-else>
    <ion-row class="ion-justify-content-center">
      <ion-col size="4" v-for="article of articles" :key="article.id">
        <ion-card
          class="ion-padding ion-margin writing-card outer-radius no-shadow light-border"
        >
          <ion-card-header
            color="secondary"
            class="ion-margin ion-padding inner-radius"
          >
            <ion-card-subtitle>
              {{ article.pubDate }}
            </ion-card-subtitle>
            <ion-card-title>
              {{ article.title }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-margin-top ion-justify-content-center">
            <img
              :src="article.image"
              :alt="article.title"
              class="inner-radius card-img"
            />
            <ion-button
              fill="outline"
              color="secondary"
              :href="article.link"
              class="ion-margin-top"
              >Read Article
            </ion-button>
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
} from "@ionic/vue";
import "animate.css";
import { store } from "../../../store";
export default defineComponent({
  name: "WritingCards",
  components: {
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRow,
    IonButton,
  },
  props: {
    articles: { type: Array, required: true },
  },
  computed: {
    mobileChange: () => {
      return store.mobileSize;
    },
  },
});
</script>

<style scoped>
.card-img {
  width: 100%;
}
</style>
