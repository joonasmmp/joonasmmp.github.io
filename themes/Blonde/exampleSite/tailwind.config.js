module.exports = {
  content: ["./**/*.html", "config.toml"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
