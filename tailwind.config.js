/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        style: ["Petit Formal Script", "Pacifico", "Send Flowers", "poppins"],
      },
      screens: {
        xs: "475px",
      },
      colors: {
        peachy: "#dc806b",
        greeny: "#89a28f",
        orangey: "#eb9f63",
        grapey: "#c27273",
      },
    },
  },
  plugins: [],
};
