/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-content": "#000000", /* Forces text to be black */
          "accent": "#E6C275", /* The gold accent */
        },
      },
    ],
  },
}