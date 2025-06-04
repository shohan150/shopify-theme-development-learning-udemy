/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid', // For layout files
    './sections/*.liquid', // For theme sections
    './snippets/*.liquid', // For theme snippets
    './templates/*.liquid', // For standard page templates
    './templates/customers/*.liquid', // For customer account templates
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}