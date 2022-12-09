import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from "vue";

export const useStore = defineStore('store', {
  state: () => {
    return {
    //   movie: "movie",
    //   timeWindow: "day",
    //   movieInfo: "",
      posters: [],
      id: [],
    }
  },
  actions: {
    //  async getMovieInfo() {
    //     const movieInfo = ref("");
    //     movieInfo.value = (
    //         await axios.get(`https://api.themoviedb.org/3/trending/${this.movie}/${this.timeWindow}`, {
    //             params: {
    //                 api_key: "261b287b93c009cd3f2fae376443794a",
    //             },
    //         })
    //     ).data

    //     for (let movies of movieInfo.value.results) {
    //         this.movieID.value.push(movies.id)
    //         this.backDropPath.value.push(movies.backdrop_path)
    //     }
    // },
  },
});