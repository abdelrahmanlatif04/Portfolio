<template>
  <div class="flex flex-wrap md:flex-col gap-10">
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
          description: `Built a responsive product page using HTML, CSS, and JS with Interactive lightbox gallery & image switcherAdd-to-cart functionality with dynamic updatesMobile-friendly layout & hover effectsFocused on clean UI, DOM manipulation, and responsive design.`,
          image: "/project-1.png",
          link: "https://abdelrahmanlatif04.github.io/E-commerce-product-app/index.html",
        },
        {
          name: "NileVista",
          description: `A sleek, high-performance landing page built with Vue 3, TailwindCSS, and Vite for an Egyptian tourism company. Features include a dynamic navbar with smooth scrolling, an immersive hero section with a drone video of the Giza Pyramids, interactive displays for top destinations and packages, and a client testimonials section. Fully responsive and optimized for all devices, this design is fully customizable for travel businesses in Egypt.`,
          image: "/project-2.png",
          link: "https://nile-vista.vercel.app/",
        },
        {
          name: "Bookmark landing page",
          description: `A sleek and user-friendly landing page built with Vue.js and TailwindCSS to introduce the Bookmark Manager browser extension. It features a compelling hero section with key extension details, a features section highlighting core functionalities, download links for supported browsers, an FAQ section to address common user questions, and a contact form for direct communication. Fully responsive and optimized for modern web standards.`,
          image: "/project-3.png",
          link: "https://3bdellatif-bookmark.vercel.app/",
        },

        {
          name: "Multistage form",
          description:
            "A responsive, interactive four-step form built with HTML5, CSS3, and Vanilla JavaScript. It smoothly guides users through personal information input, plan selection with monthly/yearly toggle, optional add-ons, and a final summary with total cost confirmation. Features include intuitive Back/Next navigation, real-time validation with error handling, and engaging UI states for a seamless user experience across all devices.",
          image: "/project-4.jpg",
          link: "https://abdelrahmanlatif04.github.io/multi-step-form/",
        },

        //{
        //   name: "Tic Tac Toe",
        //   description:"",
        //   image: "",
        //   link: "https://tic-tac-toe-hero.vercel.app/",
        // },
        // {
        //   name: "Boulangerie Pâtissier",
        //   description:"",
        //   image: "",
        //   link: "https://abdelrahmanlatif04.github.io/Bussiness/dist/index.html",
        // },
        // {
        //   name: "winner coupon card",
        //   description:"",
        //   image: "",
        //   link: "https://abdelrahmanlatif04.github.io/coupon-card/dist/index.html",
        // },
      ],
    };
  },
  components: { ProjectCard },
};
</script>

<style></style>
