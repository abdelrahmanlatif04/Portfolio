<template>
  <div class="grid gap-4 md:grid-cols-2">
    <router-link
      to="/contact"
      class="text-dark text-lg md:text-xl border-b border-black w-fit transition hover:tracking-wider hover:font-semibold"
    >
      I'm happy to help you with your next project →
    </router-link>

    <div class="flex flex-col items-center md:items-end gap-3">
      <a
        class="text-lg md:font-semibold transition hover:text-primary"
        href="mailto:abdelrahmanlatif04@gmail.com"
        target="_blank"
      >
        abdelrahmanlatif04@gmail.com
      </a>
      <a
        class="underline underline-offset-4 transition hover:tracking-wider hover:font-semibold"
        href="./Abdelrahman Ibrahem's resume.pdf"
        target="_blank"
      >
        See my CV
      </a>
    </div>
  </div>
</template>
