<template>
  <div class="container-fluid">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input
        type="text"
        class="form-control"
        placeholder="Email"
        aria-label="Email"
        aria-describedby="basic-addon1"
        v-model="userCreds.email"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        aria-label="Password"
        aria-describedby="basic-addon1"
        v-model="userCreds.password"
      />
    </div>
    {{ userCreds.email }}
    {{ userCreds.password }}

    <div class="d-grid gap-2">
      <button type="submit" class="btn btn-warning" @click="submitAuth">
        LOG IN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const userCreds = reactive({
  email: "",
  password: "",
});

// const API_TOKEN = window.sessionStorage.getItem("API_TOKEN");
function submitAuth() {
  axios
    .post(
      "https://nbbidi-3000.csb.app/auth",
      {
        email: userCreds.email,
        password: userCreds.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      // stckage du token
      window.sessionStorage.setItem("API_TOKEN", response.data.token);
      useRouter().push("/home");
      console.log(response.data.token);
    })
    .catch((error) => {
      // trigger un message d'erreur a l'utilisateur
      window.alert("Wrong Username or password");
      console.error(error);
    });
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
