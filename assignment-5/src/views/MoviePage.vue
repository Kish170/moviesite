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
  router.push("./purchase");
};
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
    v-for="(poster, index) in store.posters"
    :src="`https://image.tmdb.org/t/p/w500${poster}`"
    @click="openModal(store.id[index])"
    alt=""
  />
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
.posterss {
  padding: 1vw;
  /* color: black;
  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10vw;
  row-gap: 10vw; */
}
</style>
