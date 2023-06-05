import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Authentication",
      component: () => import("../views/Authentication.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/trainingset",
      name: "TrainingSet",
      component: () => import("../views/TrainingSet.vue"),
    },
  ],
});

export default router;
