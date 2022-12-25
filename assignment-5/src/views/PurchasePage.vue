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
</script>

<template>
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <button @click="toMovies()">MOVIES</button>
  </div>
  <div class="boughtMovies" v-for="boughtMovies in store.cart">
    <img :src="`https://image.tmdb.org/t/p/w500${boughtMovies.posters}`" alt="" />
    <div class="info">
      <h2>{{ boughtMovies.titles }}</h2>
      <p>{{ boughtMovies.overviews }}</p>
      <button @click="store.remove(boughtMovies.posters)" class="removeButton">
        REMOVE
      </button>
    </div>
  </div>
  <!-- <img
    class="posterss"
    v-for="boughtMovies in store.cart"
    :src="`https://image.tmdb.org/t/p/w500${boughtMovies.posters}`"
    alt=""
  /> -->
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}
img {
  width: 200px;
}
.logo {
  width: 100px;
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
.removeButton {
  border: 10px;
  width: 100px;
  background-color: black;
  color: white;
  margin-left: 80%;
  margin-top: 20%;
  padding: 2%;
}

button {
  margin-left: 70%;
}
</style>
