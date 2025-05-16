<template>
  <div class="flex flex-wrap md:flex-col gap-10">
    <project-card v-for="project in projects" :key="project" :project="project" />
  </div>
</template>

<script>
import ProjectCard from "./Project-card.vue";
export default {
  data() {
    return {
      projects: [
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
        {
          id: "01",
          name: "PROJECT NAME",
          description:
            "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
          image: "https://placehold.co/600x400",
          link: "/portfolio",
        },
      ],
    };
  },
  components: { ProjectCard },
};
</script>

<style></style>
