import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', {
  state: () => {
    return {
      movie: "movie",
      timeWindow: "day",
      movieInfo: false,
      movieID: [],
      backdropPath: [],
    }
  },
  actions: {
     async getMovieInfo() {
        this.movieInfo.value = (
            await axios.get(`https://api.themoviedb.org/3/trending/${this.movie}/${this.timeWindow}`, {
                params: {
                    api_key: "261b287b93c009cd3f2fae376443794a",
                },
            })
        ).data

        for (movies in this.movieInfo.results) {
            this.movieID.push(movies.id)
            this.backDropPath.push(movies.backdrop_path)
        }
    },
  },
});