/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:['class','[data-mode="dark"]'],
  theme: {
    extend: {
      colors:{
        primary:'#EB247C',
      }
    },
  },
  plugins: [],
};
