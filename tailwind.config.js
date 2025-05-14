/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#181717",
        light: "#F3F3F3",
        primary: "#606060",
        secondary: "#2429AF",
      },
      transform: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotateY: {
        180: "180deg",
      },
      translate: {
        "-full-8": "calc(-100% - 8px)",
      },
    },
  },
  plugins: [],
};
