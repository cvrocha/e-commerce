/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
