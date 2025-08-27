<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">🛠️ Skills</h2>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ceent">
      <li
        v-for="skill in skills"
        :key="skill"
        class="flex flex-col items-center gap-3 bg-secondary/10 hover:bg-secondary/20 transition rounded-xl p-5 shadow-sm"
      >
        <icon :icon="skill.icon" class="w-10 h-10 object-contain" />
        <span class="font-medium text-secondary text-lg">{{ skill.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const skills = [
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
];
</script>

<style></style>
