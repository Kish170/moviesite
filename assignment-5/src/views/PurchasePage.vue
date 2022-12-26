<script setup>
import { ref } from "vue";
import axios from "axios";
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
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <button @click="toMovies()">MOVIES</button>
    <button @click="toLogin()">LOGIN</button>
    <button @click="toHome()">HOMEPAGE</button>
  </div>
  <div class="boughtMovies" v-for="boughtMovies in store.cart">
    <img :src="`https://image.tmdb.org/t/p/w500${boughtMovies.posters}`" alt="" />
    <div class="info">
      <h2>{{ boughtMovies.titles }}</h2>
      <p>{{ boughtMovies.overviews }}</p>
      <button @click="store.remove(boughtMovies.titles)" class="remove-button">
        REMOVE
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}
img {
  width: 200px;
  height: max-content;
}
.logo {
  width: 100px;
  height: 100px;
}
.posterss {
  width: 200px;
  padding: 1vw;
}
.boughtMovies {
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
  color: white;
  margin-left: 70vmax;
  margin-top: 150px;
  padding: 1%;
}
</style>
