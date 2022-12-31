<template>
  <ion-row class="ion-align-items-start ion-padding ion-margin">
    <ion-col>
      <ion-card
        class="ion-padding ion-margin writing-card outer-radius no-shadow light-border animate__animated animate__fadeIn"
      >
        <ion-card-header
          color="secondary"
          class="ion-margin ion-padding inner-radius"
        >
          <ion-card-subtitle :id="`${id}-pubDate`">
            {{ pubDate }}
          </ion-card-subtitle>
          <ion-card-title :id="`${id}-title`">
            {{ title }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="ion-margin-top ion-justify-content-center">
          <img
            :src="image"
            :alt="title"
            class="inner-radius card-img"
            :id="`${id}-image`"
          />
          <ion-button
            fill="outline"
            color="secondary"
            :href="link"
            class="ion-margin-top"
            :id="`${id}-link`"
            >Read Article</ion-button
          >
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
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
    pubDate: String,
    title: String,
    image: String,
    link: String,
    id: String,
  },
});
</script>
