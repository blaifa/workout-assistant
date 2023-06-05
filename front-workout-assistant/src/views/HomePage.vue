<template>
  <ion-page>
    <ion-row>
      <ion-button :color="state.color" size="large" @click="goToTrainingSet"
        >TRAINING SET<ion-ripple-effect></ion-ripple-effect
      ></ion-button>
      <ion-button :color="state.color" size="large">WEEK PLAN</ion-button>
      <ion-button :color="state.color" size="large">WEEK PLAN</ion-button>
    </ion-row>
    <ion-row>
      <ion-button color="dark" size="large"
        ><ion-icon :icon="barbellOutline"></ion-icon
      ></ion-button>
    </ion-row>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonButton,
  IonRow,
  IonIcon,
  useIonRouter,
  IonRippleEffect,
} from "@ionic/vue";
import { reactive } from "vue";
import { barbellOutline } from "ionicons/icons";

const state = reactive({
  color: "warning",
});
const ionRouter = useIonRouter();

function goToTrainingSet() {
  ionRouter.navigate("/TrainingSet", "forward", "replace");
  state.color = "white";
}
</script>

<style scoped>
ion-button {
  font-size: 36px;
  font-weight: bold;
  width: 100%;
}
.ripple-parent {
  position: relative;
  overflow: hidden;

  border: 1px solid #ddd;
}

.rectangle {
  width: 300px;
  height: 150px;
}
</style>
