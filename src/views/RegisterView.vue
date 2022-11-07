<template>
  <h1>Register</h1>
  <form @submit.prevent="onSumbit">
    <div class="input-wrapper">
      <label for="email">email</label>
      <input v-model="email" id="email" type="text" />
    </div>

    <div class="input-wrapper">
      <label for="password"> password</label>
      <input v-model="password" id="password" type="text" />
    </div>

    <div class="input-wrapper">
      <label for="name"> name</label>
      <input v-model="name" id="name" type="text" />
    </div>

    <button>submit</button>
  </form>
</template>

<script setup>
import axiosInstance from "@/config/axios";
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const name = ref("");

const authStore = useAuthStore();

const onSumbit = async () => {
  try {
    const response = await axiosInstance.post(`/register`, {
      email: email.value,
      password: password.value,
      name: name.value,
    });
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

  font-size: 18px;
  border-radius: 10px;
}
</style>
