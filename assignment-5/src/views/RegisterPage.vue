<script setup>
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";

const store = useStore();
const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const password1 = ref("");
const passwordError = ref(false);
const errorCheck = ref(false);
const errorMessage = ref("");

const login = () => {
  router.push("./login");
};

const register = async () => {
  if (password.value !== password1.value) {
    passwordError.value = true;
    return;
  }
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("./login");
    })
    .catch((error) => {
      errorCheck.value = true;
      errorMessage.value = error.message;
    });
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    router.push("./movies");
  });
};
</script>

<template>
  <div class="background">
    <div class="log">
      <div class="company">
        <img src="../images/logo.png" alt="" />
        <div>
          <h1>Terry Pictures</h1>
          <h2>Weaving Stories</h2>
        </div>
      </div>
      <form @submit.prevent="register()">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <input type="password" placeholder="Re-enter Password" v-model="password1" />
        <input type="submit" value="LOGIN" />
        <p v-if="errorCheck">{{ errorMessage }}!</p>
        <!-- <p v-else-if="passwordError">Re-entered password does not match password</p> -->
      </form>

      <div class="google">
        <p>Register by Google</p>
        <button @click="registerUserByGoogle">Google</button>
      </div>
      <button @click="login()">LOGIN</button>
    </div>
  </div>
</template>

<style scoped>
.google {
  display: flex;
  padding: 2%;
}
.google > button {
  margin: 0%;
  margin-left: 10px;
}
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../images/movieWallpaper.jpg") no-repeat center/cover;
  z-index: -1;
}
.log {
  background: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.company {
  padding: 5%;
  display: flex;
  font-size: 20px;
}
input {
  font-size: 20px;
}
form {
  padding-top: 15%;
  display: flex;
  flex-direction: column;
}
button {
  border: 10px;
  width: 100px;
  background-color: black;
  color: #f9bc50;
  margin-right: 17%;
  margin-top: 50px;
  padding: 1%;
}
</style>
