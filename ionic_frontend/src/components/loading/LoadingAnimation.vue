<template>
  <ion-loading message="Loading..." spinner="crescent" />
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
