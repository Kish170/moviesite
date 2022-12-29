<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";

const store = useStore();
const router = useRouter();
const name = ref("");
const password = ref("");
const error = ref(false);

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
        <div>
          <h1>Terry Pictures</h1>
          <h2>Weaving Stories</h2>
        </div>
      </div>
      <form @submit.prevent="login()">
        <input type="text" placeholder="UserName" v-model="name" />
        <input type="password" placeholder="Password" v-model="password" />
        <input type="submit" value="LOGIN" />
      </form>
      <div v-if="error">
        <p>Incorrect Username/Password!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../images/movieWallpaper.jpg") no-repeat center/cover;
  z-index: -1;
}
.log {
  background: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.company {
  padding: 5%;
  display: flex;
  font-size: 20px;
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
