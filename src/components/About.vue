<template>
  <section class="flex items-center justify-center">
    <div class="bg-light w-full flex flex-col gap-5">
      <div class="flex items-center h-[590px]">
        <div class="w-1/2 h-full flex flex-col justify-around">
          <div class="text-[60px] font-semibold">
            Hi I'm Abdelrahman Front-end developer
          </div>
          <div class="text-2xl text-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            reiciendis architecto pariatur perferendis mollitia laboriosam
            voluptatibus id omnis facilis debitis necessitatibus, dolores saepe
            qui, itaque delectus eveniet sequi rem vero quo ea consectetur
            consequatur iusto. Sequi id sint harum beatae quia quis accusamus,
            atque dolorem voluptatem impedit vel animi consequatur.
          </div>
          <div class="text-2xl text-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            reiciendis arci id sint harum beatae quia quis accusamus, atque
            dolorem voluptatem impedit vel animi consequatur.
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

      <div class="flex justify-between items-center">
        <router-link
          to="/contact"
          class="text-dark border-b border-black w-fit transition-all hover:tracking-wider hover:font-semibold"
          target="_blank"
          >I'm happy to help you with your next project →</router-link
        >

        <div class="flex flex-col justify-center gap-2 flex-grow items-center">
          <div class="flex flex-col justify-center">
            <a
              class="text-lg font-semibold text-wrap"
              target="_blank"
              href="mailto:abdelrahmanlatif04@gmail.com"
              >abdelrahmanlatif04@gmail.com</a
            >
            <a
              class="underline underline-offset-4 transition-all hover:tracking-wider hover:font-semibold"
              href="./Abdelrahman Ibrahem's resume.pdf"
              target="_blank"
              >See my CV</a
            >
          </div>
        </div>
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
}</style>
