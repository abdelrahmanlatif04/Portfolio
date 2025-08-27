<template>
  <div
    class="min-h-screen relative w-[calc(100%-20px)] md:w-[calc(100%-160px)] mx-auto"
  >
    <nav-bar />
    <router-view class="min-h-[calc(100%-70px)]" />

    <skills v-if="$route.path !== '/contact' && $route.path !== '/work'" />
    <contact-btn v-if="$route.path !== '/contact'" />
    <contact-footer />
  </div>
</template>
<script setup>
import NavBar from "./components/Nav-bar.vue";
import ContactFooter from "./components/Contact-footer.vue";
import Skills from "./components/Skills.vue";
import ContactBtn from "./components/Contact-btn.vue";
import { defineComponent } from "vue";
defineComponent({ NavBar, ContactFooter, Skills, ContactBtn });
</script>

<style></style>
