<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";
const store = useStore();
</script>

<template>
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
  </div>
  <div class="boughtMovies" v-for="boughtMovies in store.cart">
    <img :src="`https://image.tmdb.org/t/p/w500${boughtMovies.posters}`" alt="" />
    <div class="info">
      <h2>{{ boughtMovies.titles }}</h2>
      <p>{{ boughtMovies.overviews }}</p>
      <button>REMOVE</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}
button {
  margin-left: 65%;
}
img {
  width: 200px;
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
button {
  border: 10px;
  width: 100px;
  background-color: black;
  color: white;
  margin-left: 80%;
  margin-top: 15%;
  padding: 2%;
}
</style>
