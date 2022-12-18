<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "../store/index.js";
const store = useStore();
// const getMoviesInfo = async (id) => {
//   movieInfo.value = (
//     await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
//       params: {
//         api_key: "261b287b93c009cd3f2fae376443794a",
//         append_to_response: "videos",
//       },
//     })
//   ).data;
// };
// await getMoviesInfo();
console.log(store.cart);
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
button {
  margin-left: 65%;
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
  display: flex;
  padding: 2%;
}
.info {
  padding: 2%;
}
</style>
