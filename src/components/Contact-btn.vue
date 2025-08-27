<template>
  <router-link
    to="/contact"
    class="fixed right-6 bottom-6 group z-50 before:opacity-0 hover:before:opacity-100 before:content-['Contacts'] before:absolute before:bottom-16 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:w-max before:text-white before:text-sm before:px-3 before:py-1 before:rounded-lg before:shadow-md before:transition-all before:duration-200 flex items-center justify-center w-16 h-16 rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-sm transition duration-300 animate-levitate"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <Icon icon="material-symbols:android-contacts" class="text-4xl" />
  </router-link>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const hovered = ref(false);
</script>

<style scoped>
@keyframes levitate {
  0%,
  100% {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.25);
  }
}
.animate-levitate {
  animation: levitate 3s ease-in-out infinite;
}
</style>
