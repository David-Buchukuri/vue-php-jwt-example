import { useAuthStore } from "@/stores/auth";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  console.log(authStore.authenticated);
  if (!authStore.authenticated) {
    return "/";
  }
};

export default isAuthenticated;
