<script setup></script>

<template>
  <div class="hero">
    <!-- <img src="../images/movieWallpaper.jpg" alt="" /> -->
    <h1>Movies from A to Z</h1>
  </div>
</template>

<style scoped>
.hero {
  /* background-color:  rgba(0, 0, 0, 0.5); */
  position: relative;
  width: 100%;
  height: 590px;
  /* padding: 29%; */
  /* text-align: right; */
  background: url("../images/movieWallpaper.jpg") no-repeat center/cover;
  /* background: linear-gradient(0deg, #000000 30%, #ffffff44 100%); */
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #000000 15%, #ffffff44 100%);
}

.hero > h1 {
  color: white;
  position: absolute;
  font-size: 100px;
  padding-left: 5%;
  padding-top: 5%;
  width: 230px;
  text-transform: uppercase;
}
</style>
