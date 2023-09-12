/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0984DD",
        secondary: "#F2F2F2",
        tertiary: "rgba(255, 255, 255, 0.10)",
        quaternary: "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
  presets: [require("@morpheme/tailwind-config/preset")],
};
