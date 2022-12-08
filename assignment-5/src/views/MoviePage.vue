<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";

const store = useStore();
const router = useRouter();

const login = () => {
  router.push("./purchase");
};
</script>

<template>
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
    v-for="poster in store.posters"
    :src="`https://image.tmdb.org/t/p/w500${poster}`"
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
/* .posterss { */
/* color: black;
  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10vw;
  row-gap: 10vw;
} */
</style>
