<script setup>
import { ref } from "vue";

const name = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
    if (username.value === "tmdb" && password.value === "movies") {
        router.push("./account");
    } else {
        error.value = true;
    }
};
</script>

<template>
    <div class="login">
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
    .login {
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