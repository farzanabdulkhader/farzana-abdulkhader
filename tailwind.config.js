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
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
