module.exports = {
  plugins: [
    // call the factory to get the plugin instance
    require('tailwindcss')(),
    require('autoprefixer')(),
  ],
}
