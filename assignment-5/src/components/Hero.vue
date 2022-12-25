<script setup></script>

<template>
  <div class="hero">
    <h1>Movies from A to Z</h1>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 590px;
  background: url("../images/movieWallpaper.jpg") no-repeat center/cover;
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #000000 15%, #ffffff44 100%);
}

h1 {
  color: white;
  position: absolute;
  font-size: 100px;
  padding-left: 5%;
  padding-top: 5%;
  width: 230px;
  text-transform: uppercase;
}
</style>
