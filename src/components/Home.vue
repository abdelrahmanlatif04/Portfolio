<template>
  <div class="flex flex-col gap-10">
    <!-- <hero /> -->
    <about />
    <work />
    <skills />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import Hero from "./Hero.vue";
import Work from "./Work.vue";
import About from "./About.vue";

import Skills from "./Skills.vue";
defineComponent({ Hero, Work, About, Skills });

console.log("as");
</script>

<style></style>
