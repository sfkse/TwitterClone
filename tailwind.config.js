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
          dark: "rgb(26,140,216)"
        },
        gray: {
          hover: "#E5E7EB",
          hoverLight: "#E8F5FD"
        }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
