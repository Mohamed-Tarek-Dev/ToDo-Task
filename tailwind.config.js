/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // colors: {},
    screens: {
      xs: "360",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      // poppins: "Poppins, sans-serif",
      // inter: "Inter, sans-serif;",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
