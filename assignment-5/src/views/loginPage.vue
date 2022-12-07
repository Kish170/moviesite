<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const password = ref("");
const error = ref(false);
const movieInfo = ref(false);
const movie = "movie";
const timeWindow = "day";
const multiMovies = [];

const login = () => {
    if (name.value === "tmdb" && password.value === "movies") {
        router.push("./movies");
    } else {
        error.value = true;
    }
};

const getMovieInfo = async() => {
    movieInfo.value = (
        await axios.get(`https://api.themoviedb.org/3/trending/${movie}/${timeWindow}`, {
            params: {
                api_key: "261b287b93c009cd3f2fae376443794a",
            },
        })
    ).data
}
    // await getMovieInfo();
    console.log(movieInfo.value)
</script>

<template>
    <div class="log">
        <img src="../images/logo.png" alt="">
        <div class="company">
            <h1>Terry Pictures</h1>
            <h2>Weaving Stories</h2>
        </div>
        <form  @submit.prevent="login()">
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
        display:inline-block;
    }
</style>