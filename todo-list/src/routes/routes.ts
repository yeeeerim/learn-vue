import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/views/MainPage.vue";
import DetailPage from "../views/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/details/:id",
    name: "detail",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
