/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: { fontFamily: {
      fun: ['Poppins', 'sans-serif'],
      cursive: ['Pacifico', 'cursive']
    },

    colors :{

      navbarblack :   '#333',
    }

    },
  },
  plugins: [],
};