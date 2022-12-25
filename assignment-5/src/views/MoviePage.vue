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
const login = () => {
  router.push("./purchases");
};
// console.log(store.movies[0].poster);
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <button @click="login()">CART</button>
  </div>
  <img
    class="posterss"
    v-for="movie in store.movies"
    :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
    @click="openModal(movie.id)"
    alt=""
  />
</template>

<style scoped>
.header {
  padding-left: 2%;
  display: flex;
}
button {
  margin-left: 70%;
}
.logo {
  width: 100px;
  height: 100px;
}
.posterss {
  width: 200px;
  padding: 1vw;
}
</style>
