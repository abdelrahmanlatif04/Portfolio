<template>
  <div class="flex flex-col gap-10">
    <hero />
    <work />
    <about />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Work from "./Work.vue";
import About from "./About.vue";
export default {
  components: { Hero, Work, About },
};
</script>

<style></style>
