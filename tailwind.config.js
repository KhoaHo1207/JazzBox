/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFE7D1",
      },
      colors: {
        "jazz-gold": "#FFC022",
        "jazz-white": "#FFFFFF",
        "jazz-gray": "#444445",
        "jazz-ruby": "#B71C1C",
        "jazz-green": "#2E4E3F",
        "jazz-skin": "#FFE7D1",
        "jazz-orange": "#D14828",
        "jazz-purple": "#5A28A3",
      },
      fontFamily: {
        vipmontra: ["VIPMontra", "sans-serif"],
        viprasta: ["VIPRastaglion", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.3)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.5)",
        lg: "4px 4px 6px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
