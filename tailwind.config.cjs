/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'biru': '#0E0B28',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 0.25fr))'
      },
      backgroundImage : {
        'gambar' : "url(./src/img/UserLogin.jpg)",
        'gambar2' : "url(./src/img/BuatAkunBaru.jpg)"
      },
      
    },
  },
  margin: {
    'margin-kiri' : '100px',
  },
  plugins: [],
}

