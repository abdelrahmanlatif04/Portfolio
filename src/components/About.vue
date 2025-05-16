<template>
  <section class="flex items-center justify-center">
    <div class="bg-light w-full flex flex-col gap-8">
      <div
        class="flex flex-col-reverse gap-6 md:flex-row items-center md:h-[590px]"
      >
        <div
          class="md:w-1/2 h-full flex flex-col gap-4 justify-between text-center md:text-start"
        >
          <div class="text-4xl md:text-[60px] font-semibold">
            Hi I'm Abdelrahman Front-end developer
          </div>
          <div class="text-2xl text-primary">
            I'm currently focused on frontend development using modern
            frameworks like Vue.js and Nuxt.js. I enjoy building clean,
            responsive user interfaces and crafting seamless digital experiences
            with performance and accessibility in mind.
          </div>
          <div class="text-2xl text-primary">
            Now I’m a CSE student at Aswan University — currently
            <!-- working on personal and freelance projects while  -->
            seeking for new opportunities to grow in real-world development
            environments.
          </div>
        </div>
        <img src="/avatar.jpg" class="mx-auto h-full rounded-lg" />
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">🛠️ Skills</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <!-- I need to put each skill with deferent color -->
          <!-- I need to put each skill with its logo -->
          <div
            v-for="skill in skills"
            :key="skill"
            class="bg-secondary/15 text-secondary text-center rounded-xl p-4 font-medium"
          >
            {{ skill }}
          </div>
        </div>
      </div>

      <div
        class="grid truncate gap-2 grid-cols-1 place-content-center md:grid-cols-2 md:grid-rows-2"
      >
        <router-link
          to="/contact"
          class="text-dark row-span-2 place-content-end mx-auto md:mx-0 h-fit my-auto border-b border-black w-fit transition-all hover:tracking-wider hover:font-semibold"
          target="_blank"
          >I'm happy to help you with your next project →</router-link
        >
        <a
          class="text-lg md:font-semibold text-wrap mx-auto md:mx-0 ml-auto"
          target="_blank"
          href="mailto:abdelrahmanlatif04@gmail.com"
          >abdelrahmanlatif04@gmail.com</a
        >
        <a
          class="underline underline-offset-4 w-fit mx-auto md:mx-0 ml-auto transition-all hover:tracking-wider hover:font-semibold"
          href="./Abdelrahman Ibrahem's resume.pdf"
          target="_blank"
          >See my CV</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// make all these information into pinia
const skills = ref([
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "TailwindCSS",
  "BOOTSTRAP",
  "Vue.js",
  "Nuxt.js",
  "GIT & GITHUB",
]);
</script>

<style scoped>
.black-to-blue {
  filter: invert(1) hue-rotate(190deg) brightness(1.2);
}
</style>
