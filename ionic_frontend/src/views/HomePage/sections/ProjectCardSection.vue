<template>
  <div v-if="mobileChange">
    <div v-for="repo of projects" :key="repo.name">
      <project-card-mobile-change
        :language="repo.language"
        :name="repo.name"
        :description="repo.description"
        :url="repo.url"
        :id="repo.id"
      />
    </div>
  </div>
  <div v-else>
    <ion-row>
      <ion-col size="4" v-for="repo of projects" :key="repo.language">
        <project-card
          :language="repo.language"
          :name="repo.name"
          :description="repo.description"
          :url="repo.url"
          :id="repo.id"
        />
      </ion-col>
    </ion-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol } from "@ionic/vue";
import { store } from "@/store";
import ProjectCardMobileChange from "@/components/cards/ProjectCards/ProjectCard-MobileChange.vue";
import ProjectCard from "@/components/cards/ProjectCards/ProjectCard.vue";

export default defineComponent({
  name: "ProjectCardsSection",
  components: {
    IonRow,
    IonCol,
    ProjectCardMobileChange,
    ProjectCard,
  },
  props: {
    projects: Array,
    loading: Boolean,
  },
  computed: {
    mobileChange: () => {
      return store.mobileSize;
    },
  },
});
</script>
