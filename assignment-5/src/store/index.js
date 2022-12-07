import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      city: "Toronto",
      count: 0,
    }
  },
  actions: {
            async getMovieInfo() => {
            movieInfo.value = (
                await axios.get(`https://api.themoviedb.org/3/trending/${movie}/${timeWindow}`, {
                    params: {
                        api_key: "261b287b93c009cd3f2fae376443794a",
                    },
                })
            ).data
        },
  },
});