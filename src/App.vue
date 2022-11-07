<template>
  <nav>
    <router-link to="/login"> login </router-link>
    <router-link to="/register"> register </router-link>
    <router-link to="/profile"> profile </router-link>
    <router-link to="/"> home </router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  display: flex;
  gap: 50px;
  font-size: 20px;
}

a {
  padding: 5px;
}
</style>
