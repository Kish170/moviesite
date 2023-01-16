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
const criteria = ref("");
const searchResults = ref([]);
const genre = ref(28);
const page = ref(1);
const totalPages = ref(0);

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

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;
  totalPages.value = data.total_pages;
  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};

// await store.populateFirestore();
</script>

<template>
  <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <div class="header">
    <img src="../images/logo.png" alt="" />
    <div class="company">
      <h1>Terry Pictures</h1>
      <h2>Weaving Stories</h2>
    </div>
    <select v-model="genre" @change="getGenres()">
      <option value="Action">Action</option>
      <option value="Family">Family</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Adventure">Adventure</option>
      <option value="Fantasy">Fantasy</option>
    </select>
    <input type="search" v-model="criteria" @keydown.enter="search(0)" />
    <button @click="toCart()">CART</button>
    <button @click="toLogin()">LOGIN</button>
    <button @click="toHome()">HOMEPAGE</button>
  </div>
  <template v-if="searchResults.length">
    <div class="navigation">
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
      <button class="previous" v-show="page > 1" @click="search(-1)">Prev</button>
      <button class="next" v-show="page < totalPages" @click="search(1)">Next</button>
    </div>
  </template>
  <div class="movie-grid">
    <template v-if="searchResults.length">
      <img
        class="movie"
        v-for="movie in searchResults"
        :id="movie.id"
        @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`"
      />
    </template>
    <template v-else>
      <img
        class="movie"
        v-for="movie in store.movies"
        :id="movie.id"
        @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`"
      />
    </template>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  margin-left: 7%;
}
.navigation > button {
  border: 10px;
  height: 30px;
  width: 100px;
  background-color: black;
  color: #f9bc50;
}
.previous {
  margin-right: 52%;
  margin-left: 5%;
  margin-top: 5%;
}
.next {
  margin-right: 0%;
  margin-left: 6%;
  margin-top: 5%;
}
.movie {
  height: 300px;
  width: 200px;
  padding: 2%;
}
select {
  margin-top: 60px;
  height: min-content;
}
.posters {
  width: 500px;
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
