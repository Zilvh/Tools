/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Menambahkan definisi warna kustom untuk HIMA RPL
      colors: {
        'hima-black': '#121212',
        'hima-navy': '#000068',
        'hima-red': '#e53e3e',
      },
      // Menambahkan definisi font family
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
