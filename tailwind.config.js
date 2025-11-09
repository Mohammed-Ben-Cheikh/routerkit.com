/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#8CCCFC",
          100: "#7796B9",
          200: "#2070C4",
          300: "#1F88F3",
          400: "#0659D4",
          500: "#0B222F",
        },
        accent: {
          100: "#D8E4EC",
          200: "#52595C",
          300: "#FFF95B",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, rgba(11, 34, 47, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-blue":
          "linear-gradient(90deg, rgba(31, 136, 243, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-light":
          "linear-gradient(90deg, rgba(216, 228, 236, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-dark":
          "linear-gradient(90deg, rgba(82, 89, 92, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-sky":
          "linear-gradient(90deg, rgba(119, 150, 185, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-ocean":
          "linear-gradient(90deg, rgba(32, 112, 196, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-deep":
          "linear-gradient(90deg, rgba(6, 89, 212, 1) 0%, rgba(255, 249, 91, 1) 100%)",
        "gradient-bright":
          "linear-gradient(90deg, rgba(140, 204, 252, 1) 0%, rgba(255, 249, 91, 1) 100%)",
      },
    },
  },
  plugins: [],
};
