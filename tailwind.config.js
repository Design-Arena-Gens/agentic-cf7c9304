/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6ff',
          100: '#e6edff',
          200: '#c4d3ff',
          300: '#9ab3ff',
          400: '#6789ff',
          500: '#3b5bff',
          600: '#2b44d6',
          700: '#2135a6',
          800: '#1b2b84',
          900: '#172364'
        }
      }
    },
  },
  plugins: []
}
