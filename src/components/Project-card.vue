<template>
  <div class="flex">
    <div class="w-2/5 flex flex-col">
      <div>01/project name</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto facilis
        aliquam laudantium autem perferendis dolorum quis in reprehenderit!
        Accusamus, ut aliquid. Vero consectetur hic magni a animi illo, nam
        labore?
      </div>
      <router-link class="flex-grow flex items-end" to
        >See the live demo →
      </router-link>
    </div>
    <img class="w-3/5" src="https://placehold.co/600x400" alt="" />
  </div>
</template>

<script>
export default {
  props: ["Project"],
};
</script>

<style></style>
