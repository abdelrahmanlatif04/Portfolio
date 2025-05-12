<template>
  <div class="w-screen min-h-screen relative bg-light text-dark">
    <nav-bar />
    <router-view class="pt-20 px-5" />
    <!-- <contact-footer /> -->
  </div>
</template>

<script>
import NavBar from "./components/Nav-bar.vue";
import ContactFooter from "./components/Contact-footer.vue";
export default {
  components: { NavBar, ContactFooter },
};
</script>

<style></style>
