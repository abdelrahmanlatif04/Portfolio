<template>
  <div class="flex justify-between px-5 text-sm md:text-md lg:text-lg">
    <div class="text-secondary">Abdelrahman Ibrahem - 2025</div>
    <ul class="flex gap-3">
      <li v-for="link in links" :key="link">
        <a class="hover:opacity-75" target="_blank" :href="link.dist">{{
          link.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Facebook",
          dist: "https://www.facebook.com/3bdellatiif4",
        },
        {
          title: "Twitter",
          dist: "https://twitter.com/3bdellatiif",
        },
        {
          title: "LinkedIn",
          dist: "https://www.linkedin.com/in/abdelrahmanlatif/",
        },
      ],
    };
  },
};
</script>

<style></style>
