<template>
    <div v-if="mobileChange">
        <div v-for="repo of projects" :key="repo.language">
            <ion-row class="ion-padding ion-margin">
                <ion-col>
                    <ion-card class="ion-padding ion-margin writing-card">
                        <ion-card-header color="secondary" class="ion-margin ion-padding">
                            <ion-card-subtitle>
                                {{repo.language}}
                            </ion-card-subtitle>
                            <ion-card-title>
                                {{repo.name}}
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content class="ion-margin-top">
                            <ion-text>
                                {{repo.description}}
                            </ion-text>
                        </ion-card-content>
                        <ion-card-content>
                            <ion-button fill="outline" color="secondary" :href="repo.url">View on Github</ion-button>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </div>
    </div>
    <div v-else>
        <ion-row>
            <ion-col size="4" v-for="repo of projects" :key="repo.language">
                <ion-card class="ion-padding ion-margin writing-card">
                    <ion-card-header color="secondary" class="ion-margin ion-padding">
                        <ion-card-subtitle>
                            {{repo.language}}
                        </ion-card-subtitle>
                        <ion-card-title>
                            {{repo.name}}
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content class="ion-margin-top">
                        <ion-text>
                            {{repo.description}}
                        </ion-text>
                    </ion-card-content>
                    <ion-card-content>
                        <ion-button fill="outline" color="secondary" :href="repo.url">View on Github</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonButton, IonCol, IonCardHeader, IonText} from '@ionic/vue';
import {store} from '../store';

export default defineComponent({
    name: 'ProjectCards',
    components: { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonButton, IonCol, IonCardHeader, IonText },
    props: {
        projects: {type: Array, required: true},
    },
    computed: {
        mobileChange: () => {
            return store.mobileSize;
        }
    }
})
</script>

<style scoped>

</style>