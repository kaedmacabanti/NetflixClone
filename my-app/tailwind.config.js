/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textgray: '#737373',
        textblue: '#0071EB',
        defaultinputcolor: '#333333',

        navtextselected: '#ffffff',
        navtexthover:'#a1a1a1',
        navtextdefault: '#dddddd',
        
        moviecontainerhover:'#181818',

        homebackground:'#141414',
        
        moreinfobtn: '#535558',

        tertiary : {
          900:'#0c4a6e'
        },

      width: {
          '100': '2rem',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
