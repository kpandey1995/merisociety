/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBEAEB",
        secondary: "#2F3C7E",
        third: "#A4B88F",
      },
    },
  },
  plugins: [],
};
