import { defineStore } from 'pinia'
// import axios from 'axios'
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
  },
});