/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#284450",
        secondaryColor: "#1C3641",
        thirdColor: "#E0004D",
      }
    },
  },
  plugins: [require("daisyui")],
}
