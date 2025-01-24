/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        wuwa: "#84cc16",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
