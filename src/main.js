import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Home from "./components/Home.vue";
import Work from "./components/Work.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

const routes = [
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
    name: "Home",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
