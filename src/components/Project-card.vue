<template>
  <div
    class="mx-auto flex flex-col md:flex-row-reverse gap-8 p-6 md:pb-4 md:p-0 rounded-lg md:rounded-none border md:border-b-2 md:border-0 border-primary md:border-black shadow-sm hover:shadow-md md:hover:shadow-none md:shadow-none transition-all duration-300"
  >
    <a
      :href="project.link"
      target="_blank"
      class="md:w-1/2 h-auto shadow overflow-hidden rounded-lg"
    >
      <img
        :src="project.image"
        alt="Project Screenshot"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.1] cursor-pointer"
        loading="lazy"
      />
    </a>

    <div class="md:w-1/2 flex flex-col justify-between py-1 md:py-2">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
          {{ project.name }}
        </h2>

        <p class="text-gray-600 text-base md:text-[15px] leading-relaxed mb-6">
          {{ project.description }}
        </p>
      </div>

      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center border-b border-black w-fit text-black transition-all"
      >
        <span
          class="pb-0.5 transition-all hover:font-medium hover:tracking-wider"
        >
          See the live demo
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      validator: (project) => {
        return (
          "name" in project &&
          "description" in project &&
          "image" in project &&
          "link" in project
        );
      },
    },
  },
};
</script>
