/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkShade: '#0c0c1d',
        darkerShade: '#111132',
      },
      boxShadow: {
        'neon-gold': '0 0 3px 2px rgba(255, 215, 0, 0.6), 0 0 10px 5px rgba(255, 215, 0, 0.6)',
        neonLightGrey: "0 0 5px #e0e0e0, 0 0 2px #e0e0e0, 0 0 8px #e0e0e0",

      },
    },
  },
  plugins: [],
}

