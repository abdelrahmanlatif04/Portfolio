<template>
  <div
    class="min-w-64 max-w-72 mx-auto w-3/5 h-[100vh] justify-center gap-5 py-4 flex flex-col duration-300 transition-all"
  >
    <div
      class="card relative w-full aspect-square cursor-pointer transform-style-preserve-3d"
    >
      <img
        src="/avatar.jpg"
        class="front w-full h-full absolute rounded-full backface-hidden object-cover"
      />
    </div>
    <div class="links flex flex-col w-full font-semibold">
      <a
        v-for="link in links"
        :key="link"
        :href="link.dist"
        target="_blank"
        class="w-full bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-9 smooth py-3 flex h-12 hover:h-14 items-center text-lg hover:text-xl gap-3 relative overflow-hidden shadow-lg my-1 hover:my-0 transition-all before:bg-dark before:h-full before:w-3 before:absolute before:left-0 hover:before:w-8 before:transition-all before:duration-300 duration-300"
      >
        <img :src="'./' + link.img + '.webp'" class="h-[90%]" />
        <p>
          {{ link.title }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rotation = ref(null);

const links = ref([
  {
    title: "Facebook",
    img: "/facebook",
    dist: "https://www.facebook.com/3bdellatiif4",
  },
  {
    title: "X (Twitter)",
    img: "/twitter",
    dist: "https://twitter.com/3bdellatiif",
  },
  {
    title: "LinkedIn",
    img: "/linkedin",
    dist: "https://www.linkedin.com/in/abdelrahmanlatif/",
  },
  {
    title: "Github",
    img: "/github",
    dist: "https://github.com/abdelrahmanlatif04",
  },
  {
    title: "Whatsapp",
    img: "/whatsapp",
    dist: "https://wa.me/+21157933363",
  },
  {
    title: "Mail",
    img: "/mail",
    dist: "mailto:abdelrahmanlatif04@gmail.com",
  },
]);

const rotateCard = function () {
  rotation.value =
    rotation.value == "rotateY(180deg)" ? null : "rotateY(180deg)";
};
</script>

<style></style>
