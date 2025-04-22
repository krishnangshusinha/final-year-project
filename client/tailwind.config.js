import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {   // this property adds extension to normal behaviour. So here added extension of "colors" there we mentioned "blue", "red" and there some values , so in our project where ever we use "blue" color then the color corresponding to this value gets executed
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
  darkTheme: "light",
  },

}

