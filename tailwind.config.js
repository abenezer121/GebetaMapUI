/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark': '#000',
        'white': '#fff',
        'grey': '#333',
      },  
    },
  },
  plugins: [],
}
