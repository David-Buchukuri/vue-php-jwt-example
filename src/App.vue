<template>
  <nav>
    <router-link to="/"> home </router-link>
    <router-link to="/profile" v-if="authStore.authenticated">
      profile
    </router-link>
    <router-link to="/register"> register </router-link>
    <router-link to="/login"> login </router-link>
    <button @click="logout" to="/" v-if="authStore.authenticated">
      logout
    </button>
  </nav>
  <router-view />
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const router = useRouter();

const logout = async () => {
  try {
    axiosInstance.get("/logout");
  } catch (err) {
    console.log(err);
  } finally {
    router.push("/");
  }
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 50px;
  font-size: 20px;
}

a {
  padding: 5px;
}

.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 0.2);
}

button {
  background: none;
  border: none;
  padding: 5px;
  font-size: 20px;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s ease-out;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>
