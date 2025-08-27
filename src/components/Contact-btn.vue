<template>
  <router-link
    to="/contact"
    class="fixed right-6 bottom-6 group z-50 content"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <span
      v-if="hovered"
      class="absolute bottom-20 left-1/2 -translate-x-1/2 bg-primary w-max text-white text-sm px-3 py-1 rounded-lg shadow-md transition-opacity duration-200"
    >
      Contact Me
    </span>
    <div
      class="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-300 animate-levitate"
    >
      <Icon icon="material-symbols:android-contacts" class="text-4xl" />
    </div>
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
