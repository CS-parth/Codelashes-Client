/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bar_base: "#ffa700",
        bar_base_light: "	#ffde1a",
        bar_base_dark: "#ff7400"
      }
    },
  },
  plugins: [],
}

