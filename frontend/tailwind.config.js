/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "up-down": "upDown 2s ease-out infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
  },
};
