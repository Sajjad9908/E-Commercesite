/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
        'mobile': { 'min': '280px', 'max': '479px' },   // Mobile devices
        'tablet': { 'min': '480px', 'max': '823px' },   // Tablets
        'laptop': { 'min': '933px', 'max': '1479px' },  // Laptops
        'desktop': { 'min': '1480px', 'max': '2559px' },// Standard desktops (up to 1440p)
        'large-desktop': { 'min': '2560px' },
        'max-933': { 'max': '933px' }            // 4K displays and ultra-wide monitors
    },
       fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      custom: ['Jost', 'Roboto', 'sans-serif'],
    },


    },
  },
  plugins: [],
}

