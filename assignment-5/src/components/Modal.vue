<script setup>
import { ref } from "vue";
import axios from "axios";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const selected = ref(null);
// const movieInfo = ref(false);
console.log(props.id);
const getMoviesInfo = async () => {
  movieInfo.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "261b287b93c009cd3f2fae376443794a",
        append_to_response: "videos",
      },
    })
  ).data;
};
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div v-if="movieInfo">
          <!-- <img :src="`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`" alt="" /> -->
          <h1>{{ movieInfo.title }}</h1>
          <p>
            Release Date: {{ movieInfo.release_date }} | Popularity:
            {{ movieInfo.popularity }} | Runtime: {{ movieInfo.runtime }}
          </p>
          <p>
            Vote Average: {{ movieInfo.vote_average }} | Vote Count:
            {{ movieInfo.vote_count }}
          </p>
          <h2>Overview:</h2>
          <p>{{ movieInfo.overview }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>
