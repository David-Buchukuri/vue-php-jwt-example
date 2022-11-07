import { useAuthStore } from "@/stores/auth";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  if (!authStore.authenticated) {
    return "/";
  }
};

export default isAuthenticated;
