<script setup>
import { ref } from "vue";
import { useStore } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const toMovies = () => {
  router.push("./movies");
};
const toHome = () => {
  router.push("./");
};
const toLogin = () => {
  router.push("./login");
};
</script>

<template>
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <button @click="toMovies()">MOVIES</button>
    <button @click="toLogin()">LOGIN</button>
    <button @click="toHome()">HOMEPAGE</button>
  </div>
  <div class="bought-movies" v-for="boughtMovies in Array.from(store.cart.values())">
    <img
      :src="`https://image.tmdb.org/t/p/w500${boughtMovies.poster}`"
      alt=""
      class="posters"
    />
    <div class="info">
      <h2>{{ boughtMovies.title }}</h2>
      <p>{{ boughtMovies.overview }}</p>
      <button @click="store.removeFromCart(boughtMovies.id)" class="remove-button">
        REMOVE
      </button>
    </div>
  </div>
</template>

<style scoped>
.posters {
  width: 200px;
  height: max-content;
}
.bought-movies {
  background-color: #f9bc50;
  display: flex;
  padding: 2%;
}
.info {
  padding: 2%;
}
.remove-button {
  border: 10px;
  width: 100px;
  background-color: black;
  color: #f9bc50;
  margin-left: 70vmax;
  margin-top: 150px;
  padding: 1%;
}
.remove-button:active {
  transform: translateY(4px);
}
.remove-button:hover {
  background-color: white;
}
</style>
