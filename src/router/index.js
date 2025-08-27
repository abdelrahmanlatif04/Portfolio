import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Work from "../components/Work.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Work",
    path: "/work",
    component: Work,
  },

  {
    name: "About",
    path: "/about",
    component: About,
  },

  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },

  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
