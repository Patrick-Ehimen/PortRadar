/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { 1: "#161D26" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "popover-bg": "#0caf60", // Your desired background color
      },
    },
    screens: {
      ss: "280px",
      ssl: "360px",
      ssm: "540px",
      sm: "640px",
      md: "768px",
      md1: "912px",
      lg: "1024px",
      lg1: "1238px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
