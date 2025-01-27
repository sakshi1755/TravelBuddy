/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html", // If you're using a plain HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // For React or other JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
