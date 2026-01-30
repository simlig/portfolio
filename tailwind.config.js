/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
  extend: {
    fontFamily: {
      heading: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
        glitch: ['"Rubik Glitch"', 'cursive'],

    },
  },
},
  plugins: [],
};