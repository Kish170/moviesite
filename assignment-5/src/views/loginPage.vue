<script setup>
    import { ref } from "vue";

    const name = ref("");
    const password = ref("");
    const error = ref(false);

    // const login = () => {
    //     if (username.value === "Jimmy" && password.value === "section33") {
    //         router.push("./account");
    //     } else {
    //         error.value = true;
    //     }
    // };
</script>

<template>
    <div class="register-container">
        <form>
        <!-- @submit.prevent="login()" -->
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

</style>