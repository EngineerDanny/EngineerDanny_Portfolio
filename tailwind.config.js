module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      custom: [
        "Calibre",
        "San Francisco",
        "SF Pro Text",
        "-apple-system",
        "system-ui",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        navy: "#0A192F",
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
