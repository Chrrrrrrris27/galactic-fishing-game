/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],         // para el texto base
      title: ['"Russo One"', 'sans-serif'], 
    },
    colors: {
      'meadow': {
        '50': '#13DF9B',
        '100': '#79F3CB',
        '200': '#53F0BC',
        '300': '#2EEDAE',
        '400': '#13DF9B',
        '500': '#10B981',
        '600': '#0C855D',
        '700': '#075239',
        '800': '#031E15',
        '900': '#333333',
      },
      'tapa': {
        '50': '#F4F4F3',
        '100': '#E7E6E5',
        '200': '#CCCAC8',
        '300': '#B1AFAA',
        '400': '#96938D',
        '500': '#7A7771',
        '600': '#65625D',
        '700': '#504E4A',
        '800': '#3A3936',
        '900': '#252423',
      },
      'danger': 'red',
      'transparent': 'transparent'
    }
  },
  plugins: [],
}

