<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from "vue-router";

    const router = useRouter();
    const movieInfo = ref(false);
    const movie = "movie";
    const timeWindow = "day";

    const getMovieInfo = async() => {
        movieInfo.value = (
            await axios.get(`https://api.themoviedb.org/3/trending/${movie}/${timeWindow}`, {
                params: {
                    api_key: "261b287b93c009cd3f2fae376443794a",
                },
            })
        ).data
    }
    await getMovieInfo();
    console.log(movieInfo.value)

    const login = () => {
        router.push("./purchase")
    }

</script>

<template>
    <div class="header">
        <img src="../images/logo.png" alt="">
        <div class="company">
            <h1>Terry Pictures</h1>
            <h2>Weaving Stories</h2>
        </div>
        <button @click="login()">CART</button>
    </div>
</template>



<style scoped>
    .header {
        padding-left: 2%;
        display: flex;
    }

    button {
        margin-left: 65%;
    }

    img {
        width: 200px;
    }
</style>