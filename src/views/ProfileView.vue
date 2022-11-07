<template>
  <h2>you are authenticated 🔐️</h2>
  <div v-if="profile">
    <h3>{{ profile.name }}</h3>
    <h3>{{ profile.email }}</h3>
    <h3>{{ profile.id }}</h3>
  </div>
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { ref, onMounted } from "vue";

const profile = ref(null);

onMounted(async () => {
  try {
    const response = await axiosInstance.get("/me");
    console.log(response);
    profile.value = response.data.user;
  } catch (err) {
    console.log(err);
  }
});
</script>

<style scoped>
div {
  margin-top: 50px;
  background-color: beige;
  padding: 20px;
}
</style>
