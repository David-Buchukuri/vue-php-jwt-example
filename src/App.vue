<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import axiosInstance from "@/config/axios";
const authStore = useAuthStore();

onMounted(async () => {
  try {
    const response = await axiosInstance.get("/me");
    console.log(response);
    authStore.authenticated = true;
  } catch (err) {
    console.log(err);
  }
});
</script>
