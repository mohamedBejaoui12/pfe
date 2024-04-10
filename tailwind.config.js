/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/bg.png')",
        'second':"url('./assets/some.png')",
      },
      boxShadow: {
        'lg': '0 35px 60px -15px rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

