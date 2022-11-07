<template>
  <button @click="sendLoginRequest">login</button>
  <router-link to="/profile">see your profile</router-link>
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const sendLoginRequest = async () => {
  try {
    const response = await axiosInstance.post(`/login`, {
      email: "dato@dato.io",
      password: "dato",
    });

    authStore.authenticated = true;

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
