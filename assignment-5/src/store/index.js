import { defineStore } from 'pinia'
import { ref } from "vue";
import axios from "axios";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      // id: [],
      boughtPosters: [],
      cart:[]
    }
  },
  actions: { 
    async getMovies () {
      let data  =  (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "261b287b93c009cd3f2fae376443794a",
        }
      })).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
        }
      })

      console.log(this.movies[0].poster)
    },

    add (poster, title, overview) {
      this.cart.push({
        posters: poster,
        titles: title,
        overviews: overview
      })
    },

  },
});