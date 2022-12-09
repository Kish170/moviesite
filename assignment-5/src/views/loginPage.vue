<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "../store/index.js";
const store = useStore();
const router = useRouter();
const name = ref("");
const password = ref("");
const error = ref(false);
const movieInfo = ref(false);
const movie = "movie";
const timeWindow = "day";
// const movieID = ref([]);
// const backDropPath = [];

const getMovieInfo = async () => {
  movieInfo.value = (
    await axios.get(`https://api.themoviedb.org/3/trending/${movie}/${timeWindow}`, {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
      },
    })
  ).data;
  //   console.log(movieInfo.value.results);
  for (let movies of movieInfo.value.results) {
    store.$patch((state) => {
      //   state.push({ movieID: movies.id, backDropPath: movies.backdrop_path });
      state.posters.push(movies.poster_path);
      state.id.push(movies.id);
      state.hasChanged = true;
    });
  }
};
// await getMovieInfo();
// await getMovieInfo();
// console.log(movieID.value);
// console.log(await getMovieInfo(), movieInfo.value);

const login = () => {
  if (name.value === "tmdb" && password.value === "movies") {
    getMovieInfo();
    // console.log(store.posters, store.title, store.releaseDate);
    router.push("./movies");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="log">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <form @submit.prevent="login()">
      <input type="text" placeholder="UserName" v-model="name" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" />
    </form>
    <div v-if="error" class="submitted">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.log {
  padding-left: 2%;
  display: flex;
}
button {
  margin-left: 65%;
}
img {
  width: 200px;
}
form {
  display: inline-block;
}
</style>
