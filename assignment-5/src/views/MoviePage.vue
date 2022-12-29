<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";

const store = useStore();
const router = useRouter();
const showModal = ref(false);
const selectedId = ref(0);

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
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
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
</style>
