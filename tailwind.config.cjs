//tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '102': '27rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}