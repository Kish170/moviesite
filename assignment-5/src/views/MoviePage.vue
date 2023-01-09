<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";
import axios from "axios";

const store = useStore();
const router = useRouter();
const showModal = ref(false);
const selectedId = ref(0);
const searchedMovie = ref("");
const search = ref(false);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};
const toCart = () => {
  router.push("./purchases");
};
const toHome = () => {
  router.push("./");
};
const toLogin = () => {
  router.push("./login");
};

const searchBar = async () => {
  search.value = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
        include_adult: "false",
        query: searchedMovie,
      },
    })
  ).data;
};
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <input type="text" placeholder="Search" v-model="searchedMovie" />
    <button @click="searchBar()" id="submit">SUBMIT</button>
    <button @click="toCart()">CART</button>
    <button @click="toLogin()">LOGIN</button>
    <button @click="toHome()">HOMEPAGE</button>
  </div>

  <div class="movie-grid">
    <img
      class="posters"
      v-for="movie in store.movies"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
      @click="openModal(movie.id)"
      alt=""
    />
  </div>
</template>

<style scoped>
.posters {
  width: 200px;
  height: max-content;
  padding: 1vw;
}
.movie-grid {
  margin-left: 5vw;
}
input {
  margin-top: 60px;
  height: min-content;
}
.company {
  padding-right: 40vmax;
}
#submit {
  border: 10px;
  width: 100px;
  margin-top: 50px;
  margin-left: 0px;
  height: max-content;
  background-color: black;
  color: #f9bc50;
  padding: 1%;
}
</style>
