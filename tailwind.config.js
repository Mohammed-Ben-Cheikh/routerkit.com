/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#6366F1", // Primary indigo
          400: "#4F46E5",
          500: "#0F172A", // Dark background
        },
        accent: {
          100: "#E0E7FF",
          200: "#8B5CF6", // Secondary purple
          300: "#10B981", // Success green
        },
        indigo: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
        },
        purple: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #0F172A 0%, #6366F1 100%)",
        "gradient-blue": "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
        "gradient-light": "linear-gradient(90deg, #F8FAFC 0%, #E0E7FF 100%)",
        "gradient-dark": "linear-gradient(90deg, #1E293B 0%, #0F172A 100%)",
        "gradient-indigo": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "gradient-purple": "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
        "gradient-emerald": "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
      },
    },
  },
  plugins: [],
};
