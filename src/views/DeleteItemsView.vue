<template>
  <h1>You've just deleted all your items 💀️</h1>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

axios.defaults.withCredentials = true;

onMounted(async () => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_BACKEND_URL}/items`
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});
</script>
