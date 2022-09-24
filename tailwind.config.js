const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      normal: 400,
      semibold: 558,
    },
    extend: {
      fontFamily: {
        sans: ["Recursive", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
