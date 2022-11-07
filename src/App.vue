<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

axios.defaults.withCredentials = true;

const authStore = useAuthStore();

onMounted(async () => {
  try {
    // in this case we use plain axios, because we don't need global 401 error handling, which we set up in our custom instance
    // if user folows external link, for example, to /register route, our app would send request on /me route to determine
    // if that user is authenticated ot not, if not , it would redirect the user to /, we don't need that in this case
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_BACKEND_URL}/me`
    );
    console.log(response);
    authStore.authenticated = true;
  } catch (err) {
    authStore.authenticated = false;
    console.log(err);
  }
});
</script>
