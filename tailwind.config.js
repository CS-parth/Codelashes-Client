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
        bar_base_dark: "#ff7400",
        garage_darker: "#03045e",
        garage_dark: "#03045e",
        garage: "#0077b6",
        garage_light: "#0096c7",
        garage_lighter: "#00b4d8",
      }
    },
  },
  plugins: [],
}

