<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const toLogin = () => {
    router.push("./login")
  }
</script>

<template>
  <div class="header">
  <img src="../images/logo.png" alt="">
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <button @click="toLogin">LOGIN</button>
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
</style>
