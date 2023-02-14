/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'media',
  mode: 'jit',
  plugins: [
      require("daisyui"),
      require('@tailwindcss/typography')
  ],

  daisyui: {
    styled: true,
    // themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // dark: true
  }
};
