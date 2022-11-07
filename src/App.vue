<template>
  <!-- <RouterView /> -->
  <button @click="sendLoginRequest">login</button>
  <button @click="sendAuthRequest">access some info</button>
</template>

<script setup>
import axios from "axios";
axios.defaults.withCredentials = true;

const backUrl = import.meta.env.VITE_BASE_BACKEND_URL;

const sendLoginRequest = async () => {
  const response = await axios.post(`${backUrl}/api/login`, {
    email: "dato@dato.io",
    password: "dato",
  });

  console.log(response);
};
const sendAuthRequest = async () => {
  const response = await axios.get(`${backUrl}/api/auth-protected-route`);

  console.log(response);
};
</script>
<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
