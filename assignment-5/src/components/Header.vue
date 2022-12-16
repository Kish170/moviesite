<script setup></script>

<template>
  <div class="header">
    <img class="logo" src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">LOGIN</button>
    </RouterLink>
  </div>
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
}
</style>
