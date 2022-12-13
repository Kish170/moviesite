<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const router = useRouter();
const name = ref("");
const password = ref("");
const error = ref(false);
const movieInfo = ref(false);
const movie = "movie";

const login = () => {
  if (name.value === "tmdb" && password.value === "movies") {
    store.getMovies();
    router.push("./movies");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="log">
    <div class="company">
      <img src="../images/logo.png" alt="" />
      <div class="info">
        <h1>Terry Pictures</h1>
        <h2>Weaving Stories</h2>
      </div>
    </div>
    <form @submit.prevent="login()">
      <input type="text" placeholder="UserName" v-model="name" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="LOGIN" />
    </form>
    <div v-if="error" class="submitted">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.company {
  padding: 5%;
  display: flex;
}
.log {
  display: flex;
  /* flex-direction: column; */
  /* justify-items: center; */
  /* align-items: center; */
}
button {
  margin-left: 65%;
}
img {
  width: 100px;
}
input {
  color: white;
  display: inline-block;
}
</style>
