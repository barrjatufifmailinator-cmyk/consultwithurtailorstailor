/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#800020",  // your burgundy
        beige: "#f5f5dc",     // your beige highlight
      },
    },
  },
  plugins: [],
};
