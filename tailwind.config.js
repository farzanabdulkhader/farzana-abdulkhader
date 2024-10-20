/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        dark: "#171717",
        orange: "#ff914d",
        gray: "#262626",
        ash: "#aaaaaa",
        light: "#fafafa",

        kidzin: "#EC625F",
        weatherly: "#ff914d",
        notever: "#B649BA",
        fairshare: "#EC625F",
        wandershare: "#003285",
        reactquiz: "#0f6292",
      },
    },
  },
  plugins: [],
};
