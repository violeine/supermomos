const { fontFamily, colors } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        teal: "#01B2BA",
        yellow: "#FEF452",
        purple: "#942F70",
        darkblue: "#14598A",
        gray: {
          100: "#f2f4f7",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#333333",
        },
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%)",
      },
    },
  },
  plugins: [],
};
