module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "rgb(29, 155, 240)",
          dark: "rgb(26,140,216)",
          iconHover: "rgb(225, 238, 246)"
        },
        green: {
          iconHover: "rgb(222, 241, 235)",
        },
        red: {
          iconHover: "rgb(247, 224, 235)",
        },
        gray: {
          hover: "#E5E7EB",
        }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
