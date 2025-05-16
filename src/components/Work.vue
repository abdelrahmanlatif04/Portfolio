<template>
  <div class="flex flex-wrap md:flex-col gap-10">
    <project-card :project="project" />
    <project-card :project="project" />
    <project-card :project="project" />
    <project-card :project="project" />
    <project-card :project="project" />
  </div>
</template>

<script>
import ProjectCard from "./Project-card.vue";
export default {
  data() {
    return {
      project: {
        id: "01",
        name: "PROJECT NAME",
        description:
          "A personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal website showcasi personal  my projects and blogs.",
        image: "https://placehold.co/600x400",
        link: "/portfolio",
      },
    };
  },
  components: { ProjectCard },
};
</script>

<style></style>
