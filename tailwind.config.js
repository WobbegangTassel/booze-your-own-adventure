/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{js,jsx}"],
  theme: {
    extend: { textColor: ["active"] },
    colors: {
      blue: {
        light: "#c8d9eb",
        DEFAULT: "#98b4d1",
        dark: "#747b90",
      },
      brown: {
        light: "#faf8f6",
        DEFAULT: "#593233",
        dark: "#2b1f1c",
      },
    },
    fontFamily: {
      display: ["Alegreya", "serif"],
      body: ["Alegreya Sans", "sans - serif"],
    },
  },
  plugins: [],
};
