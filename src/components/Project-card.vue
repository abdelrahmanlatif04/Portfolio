<template>
  <div
    class="mx-auto max-w-[350px] h-fit my-auto xl:max-w-[1100px] xl:w-3/4 flex flex-col xl:flex-row-reverse gap-8 p-6 xl:pb-4 xl:p-0 rounded-lg xl:rounded-none xl:border-b-2 xl:border-black shadow-xl hover:shadow-xl xl:hover:shadow-none xl:shadow-none transition-all duration-300 bg-white xl:bg-transparent"
  >
    <a
      :href="project.link"
      target="_blank"
      class="xl:w-1/2 h-auto overflow-hidden rounded-lg"
    >
      <img
        :src="project.image"
        alt="Project Screenshot"
        class="object-contain transition-transform duration-500 hover:scale-[1.1] cursor-pointer"
        loading="lazy"
      />
    </a>

    <div class="xl:w-1/2 flex flex-col justify-between py-1 xl:py-2">
      <div>
        <h2 class="text-2xl xl:text-4xl font-bold text-gray-900 mb-3 xl:mb-5">
          {{ project.name }}
        </h2>

        <p class="text-gray-600 text-base xl:text-base leading-relaxed mb-6">
          {{ project.description.slice(0, 300) }}
          {{ project.description.length > 300 ? "..." : "" }}
        </p>
      </div>

      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center border-b border-black w-fit text-black transition-all"
      >
        <span class="pb-0.5 transition-all hover:tracking-wider">
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
