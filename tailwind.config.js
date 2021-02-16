module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'Helvetica', 'Arial'],
        serif: ['IBM Plex Serif', 'Times New Roman', 'Georgia'],
        mono: ['IBM Plex Mono', 'Courier New']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
