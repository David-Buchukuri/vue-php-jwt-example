<template>
  <h1>Log In</h1>
  <form @submit.prevent="onSumbit">
    <div class="input-wrapper">
      <label for="email">email</label>
      <input v-model="email" id="email" type="text" />
    </div>

    <div class="input-wrapper">
      <label for="password"> password</label>
      <input v-model="password" id="password" type="text" />
    </div>

    <button>submit</button>
  </form>
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const onSumbit = async () => {
  try {
    const response = await axiosInstance.post(`/login`, {
      email: email.value,
      password: password.value,
    });
    authStore.authenticated = true;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
}

input {
  padding: 5px;
  width: 300px;
}
.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
}

button {
  border: none;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
}
</style>
