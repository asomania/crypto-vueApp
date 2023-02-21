import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("./views/Wallet.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
