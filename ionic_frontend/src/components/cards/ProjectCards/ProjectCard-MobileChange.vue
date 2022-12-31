<template>
  <ion-card class="ion-padding ion-margin outer-radius no-shadow light-border">
    <ion-card-header
      color="tertiary"
      class="ion-margin ion-padding inner-radius"
    >
      <ion-card-subtitle :id="`${id}-language`">
        {{ language }}
      </ion-card-subtitle>
      <ion-card-title :id="`${id}-name`">
        {{ name }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-margin-top">
      <ion-text :id="`${id}-description`">
        {{ description }}
      </ion-text>
    </ion-card-content>
    <ion-card-content>
      <ion-button fill="outline" color="tertiary" :href="url" :id="`${id}-url`"
        >View on Github</ion-button
      >
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonText,
} from "@ionic/vue";

export default defineComponent({
  name: "ProjectCardMobileChange",
  components: {
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonCardHeader,
    IonText,
  },
  props: {
    language: String,
    name: String,
    description: String,
    url: String,
    id: String,
  },
});
</script>
