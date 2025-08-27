<template>
  <div
    class="py-5 mb-6 w-full bg-main flex items-center gap-10 mx-auto justify-between"
  >
    <router-link
      class="text-xl font-bold tracking-wide hover:tracking-widest cursor-pointer transition-all hover:opacity-80"
      to="/"
    >
      3bdellatiif
    </router-link>
    <ul class="flex flex-grow max-w-80 justify-between">
      <li v-for="link in links" :key="link">
        <router-link
          class="hover:tracking-wider cursor-pointer transition-all hover:opacity-80 font-semibold"
          :to="{ name: link }"
          >{{ link }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const links = ref(["Work", "About", "Contact"]);
</script>

<style></style>
