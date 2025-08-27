<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-10 relative"
  >
    <project-card
      v-for="project in projects"
      :key="project"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from "./Project-card.vue";

export default {
  data() {
    return {
      projects: [
        {
          name: "E-commerce sneakers page",
          description:
            "Built a responsive product page using HTML, CSS, and JS with Interactive lightbox gallery & image switcherAdd-to-cart functionality with dynamic updatesMobile-friendly layout & hover effectsFocused on clean UI, DOM manipulation, and responsive design.",
          image: "/project-1.webp",
          link: "https://abdelrahmanlatif04.github.io/E-commerce-product-app/index.html",
        },

        {
          name: "Pinterest clone",
          description:
            "A Pinterest homepage clone made using Tailwindcss \& Vue js. Implemented a responsive grid layout, hover effects, and a clean modern UI inspired by the original platform.",
          image: "/project-2.webp",
          link: "https://pinterest-clone-blond.vercel.app/",
        },

        {
          name: "Bookmark landing page",
          description:
            "A sleek and user-friendly landing page built with Vue.js and TailwindCSS to introduce the Bookmark Manager browser extension. It features a compelling hero section with key extension details, a features section highlighting core functionalities, download links for supported browsers, an FAQ section to address common user questions, and a contact form for direct communication. Fully responsive and optimized for modern web standards.",
          image: "/project-3.webp",
          link: "https://3bdellatif-bookmark.vercel.app/",
        },

        {
          name: "Multistage form",
          description:
            "A responsive, interactive four-step form built with HTML5, CSS3, and Vanilla JavaScript. It smoothly guides users through personal information input, plan selection with monthly/yearly toggle, optional add-ons, and a final summary with total cost confirmation. Features include intuitive Back/Next navigation, real-time validation with error handling, and engaging UI states for a seamless user experience across all devices.",
          image: "/project-4.webp",
          link: "https://abdelrahmanlatif04.github.io/multi-step-form/",
        },

        {
          name: "Tic Tac Toe",
          description:
            "This is a dynamic Tic-Tac-Toe game built with Vue.js and styled using Tailwind CSS. It features three unique game modes—Classic, Infinity, and Ultimate—each adding a creative twist to the traditional gameplay. From the nostalgic feel of Classic Mode to the strategy-driven Ultimate Mode, this project showcases both frontend logic and responsive design",

          image: "/project-5.webp",
          link: "https://tic-tac-toe-hero.vercel.app/",
        },
        {
          name: "Winner coupon card",
          description:
            "A sleek video game store coupon page featuring a 25% discount and a stylish 3D flip card effect, all built with Tailwind CSS. Designed to catch attention and deliver deals with a smooth, interactive twist.",
          image: "/project-6.webp",
          link: "https://abdelrahmanlatif04.github.io/coupon-card/dist/index.html",
        },
        {
          name: "Boulangerie Pâtissier",
          description:
            "A clean, responsive landing page for a French-style bakery, built with Tailwind CSS. It showcases essential info like opening hours, location, facilities, and social links, with a simple contact section for easy communication. Elegant, inviting, and made to whet your digital appetite.",
          image: "/project-7.webp",
          link: "https://abdelrahmanlatif04.github.io/Bussiness/dist/index.html",
        },
        {
          name: "NileVista",
          description:
            "A sleek, high-performance landing page built with Vue 3, TailwindCSS, and Vite for an Egyptian tourism company. Features include a dynamic navbar with smooth scrolling, an immersive hero section with a drone video of the Giza Pyramids, interactive displays for top destinations and packages, and a client testimonials section. Fully responsive and optimized for all devices, this design is fully customizable for travel businesses in Egypt.",
          image: "/project-8.webp",
          link: "https://nile-vista.vercel.app/",
        },
      ],
    };
  },
  components: { ProjectCard },
};
</script>

<style></style>
