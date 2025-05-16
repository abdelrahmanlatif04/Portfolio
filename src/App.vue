<template>
  <div
    class="min-h-screen relative w-[calc(100%-20px)] md:w-[calc(100%-160px)] mx-auto"
  >
    <nav-bar />
    <router-view class="pt-[70px] min-h-[calc(100%-70px)]" />
    <contact-footer />
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
