/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily:{
      'manrope': ['Manrope', 'sans-serif']
  },

    extend: {
      backgroundImage: {
        
        'form-texture': "url('./assets/bg.jpg')",
      },
      colors: {
        'btn-primary': '#ABEF5F',
        'text-primary': '#212121',
        'text-secondary': '#494949',
        'text-third': '#737373',
        'text-forth': '#1C1C1C',
        'bg-primary': '#F4F4F4'
        
       
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

