<template>
  <div
    class="max-w-sm md:max-w-5xl flex flex-col md:flex-row-reverse gap-6 p-4 rounded-lg md:rounded-none shadow md:shadow-none border-b border-dark mx-auto"
  >
    <img
      src="https://placehold.co/600x400"
      alt="Project Screenshot"
      class="w-full md:w-1/2 rounded-md object-cover aspect-[1.5]"
    />

    <div class="flex flex-col justify-between gap-4 w-full">
      <h2 class="text-2xl md:text-3xl font-bold text-dark">
        {{ `${project.id}  ${project.name}` }}
      </h2>

      <p class="text-primary text-base md:text-lg">
        {{ project.description }}
      </p>

      <router-link
        class="text-sm text-dark border-b border-black w-fit transition-all hover:tracking-wider hover:font-semibold"
        :to="project.link || '/'"
      >
        See the live demo →
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>
