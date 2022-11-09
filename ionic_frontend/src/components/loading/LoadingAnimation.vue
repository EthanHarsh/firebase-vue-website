<template>
  <ion-loading message="Waking up Google Cloud Functions" spinner="crescent" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonLoading } from "@ionic/vue";

export default defineComponent({
  name: "LoadingAnimation",
  components: { IonLoading },
});
</script>

<style scoped></style>
