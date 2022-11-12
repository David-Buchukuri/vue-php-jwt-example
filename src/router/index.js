import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import DeleteItemsView from "../views/DeleteItemsView.vue";
import isAuthenticated from "./guards";
import { useAuthStore } from "@/stores/auth";

import axios from "axios";
axios.defaults.withCredentials = true;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      beforeEnter: isAuthenticated,
    },
    {
      path: "/delete-items",
      name: "delete-items",
      component: DeleteItemsView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

// before loading any route we need to determine if user is authenticated or not
// if the aplication is being loaded for the first time, auth state is set to null,
// we need to check if user is authenticated, based on sending get request to /me
// and then set auth state to true or false based on response,
// we need that state beforehand because we use that state in route specific guards

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.authenticated === null) {
    try {
      await axios.get(`${import.meta.env.VITE_BASE_BACKEND_URL}/me`);
      authStore.authenticated = true;
    } catch (err) {
      authStore.authenticated = false;
    } finally {
      return next();
    }
  }
  return next();
});

export default router;
