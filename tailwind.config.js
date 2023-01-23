/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        childMove: {
          "0%": {
            opacity: "0.5",
            transform: "translateX(-50%) translateY(-100%)",
          },
          "75%": {
            transform: "translateX(3%) translateY(3%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        catMove: {
          "0%": {
            opacity: "1",
            transform: "translateX(50%)",
          },
          "75%": {
            transform: "translateX(-3%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        greenMove: {
          "0%": {
            opacity: "1",
            transform: "translateX(50%) translateY(50%)",
          },
          "75%": {
            transform: "translateX(-3%) translateY(-3%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        titleMove: {
          "0%": {
            opacity: "0",
            transform: "translateX(300%)",
          },
          "75%": {
            opacity: "0.7",
            transform: "translateX(-3%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        alphabetMove: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%)",
          },
          "75%": {
            transform: "translateX(3%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        appear: "appear 1s ease-in-out",
        childMove: "childMove 0.7s ease-in-out",
        catMove: "catMove 0.7s ease-in-out",
        greenMove: "greenMove 0.7s ease-in-out",
        titleMove: "appear 2s ease-in-out",
        cloverAppear: "appear 2s ease-in-out",
        alphabetMove: "alphabetMove 2s ease-in-out",
      },

      colors: {
        "represent-color": "#A1CCFB",
        "title-color": "#3DA3FB",
      },

      boxShadow: {
        default: "4px 12px 30px 6px rgba(0, 0, 0, 0.09)",
      },
    },
    fontFamily: {
      nanumLight: ["NanumLight", "sans-serif"],
      nanumRegular: ["NanumRegular", "sans-serif"],
      nanumBold: ["NanumBold", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animation-delay")],
}
