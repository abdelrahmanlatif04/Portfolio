<template>
  <div class="flex flex-col gap-10">
    <about />
    <work />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import Work from "./Work.vue";
import About from "./About.vue";
defineComponent({ Work, About });
</script>

<style></style>
