import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Home from "./components/Home.vue";
import Work from "./components/Work.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import ProjectDetails from "./components/Project-details.vue";

const pinia = createPinia();

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
    name: "Project details",
    path: "/project/:id",
    component : ProjectDetails,
    props : true
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

createApp(App).use(pinia).use(router).mount("#app");
