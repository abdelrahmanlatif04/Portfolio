<template>
  <div class="flex gap-4 pb-3 border-b-2 border-dark">
    <div class="w-3/5 flex flex-col gap-4">
      <div class="text-2xl font-bold">01/project name</div>
      <div class="text-primary text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto facilis
        aliquam laudantium autem pe Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Dolorum repudiandae excepturi iusto. Veritatis
        praesentium possimus quo, dolor saepe, reprehenderit asperiores non illo
        temporibus at consequuntur, esse repellat iure aut culpa? rferendis
        dolorum quis in reprehenderit! Accusamus, ut aliquid. Vero consectetur
        hic magni a animi illo, nam labore?
      </div>
      <router-link
        class="flex-grow flex items-end border-b border-black truncate w-fit transition-all hover:tracking-wider hover:font-semibold"
        to
        >See the live demo →
      </router-link>
    </div>
    <img class="aspect-[2]" src="https://placehold.co/600x400" alt="" />
  </div>
</template>

<script>
export default {
  props: ["Project"],
};
</script>

<style></style>
