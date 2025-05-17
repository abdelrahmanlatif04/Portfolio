<template>
  <div
    class="max-w-sm md:max-w-full flex flex-col md:flex-row-reverse gap-6 p-4 rounded-lg md:rounded-none shadow md:shadow-none border md:border-t-0 md:border-x-0 md:border-dark mx-auto"
  >
    <img
      :src="project.image"
      alt="Project Screenshot"
      class="w-full md:w-1/2 rounded-md object-cover aspect-[1.5]"
    />

    <div
      class="flex flex-col justify-between gap-4 text-center md:text-start w-full"
    >
      <h2 class="text-2xl md:text-3xl tex font-bold text-dark">
        {{ `${project.name}` }}
      </h2>

      <p class="text-primary text-base">
        {{ project.description }}
      </p>

      <a
        class="text-sm text-dark border-b border-black w-fit transition-all hover:tracking-wider hover:font-semibold"
        :href="project.link"
        target="_blank"
      >
        See the live demo →
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>
