/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/react/controllers/*.jsx",
    "./assets/react/components/*.jsx",

  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'interbold': ['Inter Bold', 'sans-serif'],
    },
  },
  plugins: [],
}