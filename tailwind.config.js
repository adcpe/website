/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        plexmono: ['IBM Plex Mono, monospaced'],
        plexsans: ['IBM Plex Sans, sans-serif']
      }
    }
  },
  plugins: []
}
