import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/homePage.vue";
import Login from "../views/loginPage.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;