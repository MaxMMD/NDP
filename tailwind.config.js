module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        body: ["Helvetica Neueu", "Helvetica", "Arial", "sans-serif"],
        heading: ["Baskervville", "Times New Roman", "serif"],
      },
      maxHeight: {
        featuregallery: "690px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["hover", "first"],
    },
  },
  plugins: [],
}
