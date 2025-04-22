/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'party-gradient': 'linear-gradient(to right, #F4CD32, #B8981A, #D6B326)',
      },
    },
  },
  plugins: [],
}
