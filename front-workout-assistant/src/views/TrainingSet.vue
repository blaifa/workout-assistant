<template>
  <ion-page style="overflow: auto">
    <ion-row>
      <ion-button
        color="warning"
        size="large"
        v-for="item in training_set.list"
        >{{ item.name }}</ion-button
      >
    </ion-row>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonRow } from "@ionic/vue";
import axios from "axios";
import { reactive, onMounted } from "vue";

const API_TOKEN = window.sessionStorage.getItem("API_TOKEN");

const training_set = reactive({
  list: [],
});
onMounted(() => {
  axios
    .get(
      "https://nbbidi-3000.csb.app/trainingset",

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },
      }
    )
    .then((response) => {
      // stckage du token
      training_set.list = response.data.list;
      console.log(response.data.token);
    })
    .catch((error) => {
      // trigger un message d'erreur a l'utilisateur
      window.alert("Impossible to get your trainings set");
      console.error(error);
    });
});
</script>

<style scoped>
ion-button {
  font-size: 27px;
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
