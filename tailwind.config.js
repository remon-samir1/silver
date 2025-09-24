/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "0 0 7px #14984F",
      },
      colors: {
        main: "#14984F",
        textColor: "#00233F",
        card:"#F0F9F4",
        stroke: "#DDE4E9",
        body: "#555555",
        glass: "rgba(175, 175, 175, 0.10)",
      },
    },
  },
  plugins: [],
};
