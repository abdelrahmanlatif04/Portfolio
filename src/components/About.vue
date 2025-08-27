<template>
  <section class="flex items-center justify-center px-4 py-12">
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
            class="h-80 md:h-full mx-10 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      <!-- Skills Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">🛠️ Skills</h2>
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ceent">
          <li
            v-for="skill in skills"
            :key="skill"
            class="flex flex-col items-center gap-3 bg-secondary/10 hover:bg-secondary/20 transition rounded-xl p-5 shadow-sm"
          >
            <icon :icon="skill.icon" class="w-10 h-10 object-contain" />
            <span class="font-medium text-secondary text-lg">{{
              skill.name
            }}</span>
          </li>
        </ul>
      </div>

      <!-- <div class="grid gap-4 md:grid-cols-2">
        <router-link
          to="/contact"
          class="text-dark text-lg md:text-xl mt-auto border-black w-fit transition-all hover:tracking-wider hover:font-semibold"
        >
          I'm happy to help you with your next project →
        </router-link>

        <div class="flex flex-col items-center md:items-end gap-3">
          <a
            class="text-lg md:font-semibold transition hover:text-primary"
            href="mailto:abdelrahmanlatif04@gmail.com"
            target="_blank"
          >
            abdelrahmanlatif04@gmail.com
          </a>
          <a
            class="underline underline-offset-4 transition-all hover:tracking-wider hover:font-semibold"
            href="./Abdelrahman Ibrahem's resume.pdf"
            target="_blank"
          >
            See my CV
          </a>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const skills = ref([
  { name: "HTML", icon: "devicon:html5" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "Python", icon: "devicon:python" },
  { name: "C++", icon: "devicon:cplusplus" },
  { name: "TailwindCSS", icon: "devicon:tailwindcss" },
  { name: "Bootstrap", icon: "devicon:bootstrap" },
  { name: "Vue.js", icon: "devicon:vuejs" },
  { name: "Nuxt.js", icon: "devicon:nuxtjs" },
  { name: "Github", icon: "devicon:github" },
]);
</script>

<style scoped>
/* Optional: subtle animation on hover */
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
</style>
