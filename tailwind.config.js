/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        
      },
      maxWidth:{
        'container': '1170px'
      },
      colors:{
        'secondary': '#FAFAFA',
        'primary': '#DB4444',
      },
    },
  },
  plugins: [],
}

