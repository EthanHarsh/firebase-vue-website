<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonButton, IonImg} from '@ionic/vue';
import {store} from '../store';

export default defineComponent({
    name: 'ProjectCards',
    components: { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonButton, IonImg },
    props: {
        projects: {type: Array, required: true},
    },
    data() {
        return {
            mobileSize: store.mobileSize,
        }
    }
})
</script>

<style scoped>

</style>