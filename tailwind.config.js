/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        
        
        // primary: '#ffffff',
        // secondary: '#bad4f7',
        // base: '#0b0c10',
        // // base: '#222831',

        // base2: '#393E46',
        // secondary2: '#014dad',

        primary: '#ffffff',
        secondary: '#66fcf2',
        base1: '#0b0c10',
        // base: '#222831',

        base2: '#393E46',
        secondary2: '#46a29f',


        // primary: '#ffffff',
        // secondary: '#00FFF5',
        // base: '#222831',

        // base2: '#393E46',
        // secondary2: '#00ADB5'


        // 1B262C
        // primary: '#ffffff',
        // secondary: '#BBE1FA',
        // base: '#1B262C',
        // base2: '#1B262C',
        // secondary2: '#3282B8'
      },

    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'tablet': '1220px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

