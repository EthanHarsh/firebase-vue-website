<template>
  <div v-if="mobileChange">
    <div v-for="article of articles" :key="article.id">
      <writing-card-mobile-change
        :pubDate="article.pubDate"
        :title="article.title"
        :image="article.image"
        :link="article.link"
        :id="article.id.split('/p/')[1]"
      />
    </div>
  </div>
  <div v-else>
    <ion-row class="ion-justify-content-center">
      <ion-col size="4" v-for="article of articles" :key="article.id">
        <writing-card
          :pubDate="article.pubDate"
          :title="article.title"
          :image="article.image"
          :link="article.link"
          :id="article.id.split('/p/')[1]"
        />
      </ion-col>
    </ion-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow } from "@ionic/vue";
import { store } from "../../../store";
import WritingCard from "@/components/cards/WritingCards/WritingCard.vue";
import WritingCardMobileChange from "@/components/cards/WritingCards/WritingCard-MobileChange.vue";
export default defineComponent({
  name: "WritingCardSection",
  components: {
    WritingCard,
    WritingCardMobileChange,
    IonRow,
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
