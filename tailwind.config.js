/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3E2723",
      },
      colors: {
        "jazz-gold": "#D4AF37",
        "jazz-white": "#FFFFFF",
        "jazz-gray": "#CCCCCC",
        "jazz-ruby": "#B71C1C",
        "jazz-green": "#2E4E3F",
        "jazz-skin": "#FFF3D7",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
      },
      rotate: {
        25: "25deg",
      },
    },
  },
  plugins: [],
};
