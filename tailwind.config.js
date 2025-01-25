/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        typing: "typing 3s steps(20), blink .7s infinite",
        marquee: "marquee 30s linear infinite"
      },
      colors: {
        bar_base: "#ffa700",
        bar_base_light: "#ffde1a",
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