/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
