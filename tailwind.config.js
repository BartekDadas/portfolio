module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        gray: { 100: "var(--gray_100)" },
        green: { a700: "var(--green_a700)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: { opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
