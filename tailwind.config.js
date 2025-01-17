/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'maxx-blue': '#496DA7',
          'maxx-gold': '#FBB019',
          'maxx-black': '#2D2D2D',
        },
      },
    },
    plugins: [],
  }