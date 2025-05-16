<template>
  <div
    class="min-w-64 max-w-72 mx-auto w-3/5 justify-center gap-5 flex flex-col duration-300 transition-all"
  >
    <div
      class="card relative w-full aspect-square cursor-pointer [transform-style:preserve-3d] transition-transform duration-500"
      :style="{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
      @click="flipped = !flipped"
    >
      <!-- Front (Avatar) -->
      <img
        src="/avatar2.jpg"
        class="front w-full h-full absolute rounded-full [backface-visibility:hidden] object-cover"
      />

      <!-- Back (QR Code) -->
      <img
        src=".././assets/qr-code.png"
        alt="QR Code"
        class="back w-full h-full absolute rounded-2xl [backface-visibility:hidden] object-cover [transform:rotateY(180deg)]"
      />

      <div
        class="absolute gap-2 transition-opacity duration-500 sm:-rotate-45 flex flex-col justify-center items-center left-0 -translate-x-[70%] w-24 text-center"
        :class="flipped ? 'opacity-0' : 'opacity-90'"
      >
        Click here for qr code
        <img
          src="../assets/arrow.png"
          class="rotate-90 sm:rotate-[135deg] w-1/3"
        />
      </div>
    </div>
    <div class="links flex flex-col w-full font-semibold">
      <a
        v-for="link in links"
        :key="link"
        :href="link.dist"
        target="_blank"
        class="w-full black-blue bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-9 smooth py-3 flex h-12 hover:h-14 items-center text-lg hover:text-xl gap-3 relative overflow-hidden shadow-lg my-1 hover:my-0 transition-all before:bg-primary before:h-full before:w-3 before:absolute before:left-0 hover:before:w-8 before:transition-all before:duration-300 duration-300"
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
const flipped = ref(false);

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

<style scoped>
.card {
  transform-style: preserve-3d;
}
.front,
.back {
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}
</style>
