/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        blue_brand: '#535da1',
        green_brand: '#81b29a',
      }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

