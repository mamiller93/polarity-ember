module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './app/**/*.{html,js,ts,hbs}'],
  darkMode: 'media',
  plugins: [require('@tailwindcss/typography')],
};
