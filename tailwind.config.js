/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
     colors: {
      'primary': '#D5ADF6',
      'grayColor': '#626262',
      'lightGray': '#A7A7A7',
      'error': '#F4828F'
     },
     fontSize: {
      'xxs': '9px'
     },
     backgroundImage: {
      'gradiantBg': 'linear-gradient(180deg, #D6F0FE 0%, #F5DBFD 100%)',
    },
    },
  },
  plugins: [require('flowbite/plugin')],
};
