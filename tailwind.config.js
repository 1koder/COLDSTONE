/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
      './src/**/*.html',
      './src/**/*.js',
      './public/**/*.html',
      './public/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/stone.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
