<template>
  <section class="flex items-center justify-center px-4 relative">
    <div class="bg-light w-full flex flex-col gap-16 max-w-6xl">
      <!-- Hero Section -->
      <div
        class="flex flex-col-reverse md:flex-row md:justify-between items-center gap-10 md:h-[590px]"
      >
        <!-- Text -->
        <div
          class="flex flex-col justify-between gap-6 text-center md:text-left md:w-1/2"
        >
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            Hi 👋 I'm <span class="text-primary">Abdelrahman</span>, <br />
            Frontend Developer
          </h1>

          <p class="text-xl text-primary">
            I'm focused on frontend development with Vue.js & Nuxt.js. I love
            building clean, responsive UIs and seamless digital experiences with
            performance and accessibility in mind.
          </p>

          <p class="text-xl text-primary">
            Currently, I’m a CSE student at Aswan University — seeking new
            opportunities to grow in real-world development environments.
          </p>

          <a
            class="text-xl text-primary underline transition-all hover:tracking-wider hover:font-semibold"
            href="./Abdelrahman Ibrahem's resume.pdf"
            target="_blank"
          >
            See my CV
          </a>
        </div>

        <!-- Avatar -->
        <div class="flex justify-center md:justify-end md:w-1/3">
          <img
            src="../assets/avatar.jpg"
            alt="Abdelrahman"
            class="h-80 md:h-full mx-10 rounded-2xl shadow-lg object-cover transition duration-300 hover:scale-[1.05]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent } from "vue";
import Skills from "./Skills.vue";
defineComponent({
  Skills,
});
</script>
