module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.njk'
  ],
  theme: {
    fontFamily: {
      sans: [ 'Roboto', 'sans-serif'],
      serif: ['serif'],
      heading: ['Roboto Condensed', 'san-serif']
    },
    extend: {
      colors: {
        'wart-brown': '#874E38',
        'wart-orange': '#EF3F22',
        'wart-yellow': '#E5C144',
        'wart-teal': '#4FB5B5'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
