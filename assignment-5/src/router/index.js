import { query } from "firebase/firestore";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import Movie from "../views/MoviePage.vue";
import Purchase from "../views/PurchasePage.vue";
import Register from "../views/RegisterPage.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/movies",
    component: Movie
  },
  {
    path: "/purchases",
    component: Purchase
  },
  {
    path: "/register",
    component: Register
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;