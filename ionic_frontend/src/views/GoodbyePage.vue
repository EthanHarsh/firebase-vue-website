<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Goodbye</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Goodbye</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Thanks for visiting! 👋🏻😁</strong>
        <p>Redirecting you to {{ redirectName }}.</p>
      </div>
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

export default defineComponent({
  name: "GoodbyePage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  props: {
    redirectName: String,
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
</style>
