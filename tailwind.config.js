/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        fontJoti: ["Joti-One"],
        inter_light: ["inter_light"],
        inter_bold: ["inter_bold"],
        inter_extraBold: ["inter_extraBold"],
        inter_black: ["inter_black"],
        inter_regular: ["inter_regular"],
        inter_medium: ["inter_medium"],
        inter_semiBold: ["inter_semiBold"],
      },
    },
  },
  plugins: [],
};
