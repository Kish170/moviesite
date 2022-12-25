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
  <div class="background">
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
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background: url("../images/movieWallpaper.jpg") no-repeat center/cover;
  /* background: #f9bc50; */
  z-index: -1;
}
.company {
  padding: 5%;
  display: flex;
  font-size: 20px;
}
.log {
  background: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
button {
  margin-left: 65%;
}
img {
  width: 10vw;
}
input {
  font-size: 20px;
}
form {
  padding-top: 15%;
  display: flex;
  flex-direction: column;
}
</style>
