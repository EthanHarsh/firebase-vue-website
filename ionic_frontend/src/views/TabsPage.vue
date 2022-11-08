<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="GitHub" href="/portfolio">
          <ion-icon :icon="logoGithub" />
          <ion-label>GitHub</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Medium" href="/writing">
          <ion-icon :icon="logoMedium" />
          <ion-label>Medium</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="LinkedIn" href="/linkedin">
          <ion-icon :icon="logoLinkedin" />
          <ion-label>LinkedIn</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { home, logoGithub, logoMedium, logoLinkedin } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      home,
      logoGithub,
      logoMedium,
      logoLinkedin,
    };
  },
});
</script>
